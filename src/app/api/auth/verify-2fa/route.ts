// src/app/api/auth/verify-2fa/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { findUserByEmail, updateUser, generateToken, verifyToken } from '@/lib/auth'; // Assuming users are stored in memory
import type { User, JWTPayload } from '@/types/auth';
import { cookies } from 'next/headers';

const verify2FASchema = z.object({
  email: z.string().email("Invalid email address provided for 2FA verification"), // Or userId if preferred from pre-2fa token
  code: z.string().length(6, '2FA code must be 6 digits'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = verify2FASchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: 'Invalid input', details: validation.error.errors }, { status: 400 });
    }

    const { email, code } = validation.data;

    // Optionally, verify against a pre-2FA token if one was issued
    const pre2FATokenCookie = cookies().get('aicurate_session');
    let userIdFromToken: string | null = null;

    if (pre2FATokenCookie) {
        const decoded = verifyToken(pre2FATokenCookie.value) as JWTPayload | null;
        if (decoded && !decoded.is2FAVerified) {
            userIdFromToken = decoded.userId;
        } else if (decoded && decoded.is2FAVerified) {
            // Already fully authenticated, no need to re-verify 2FA with this endpoint this way
            // Potentially just refresh token or redirect
            return NextResponse.json({ message: 'Already authenticated' }, { status: 200 });
        }
    }
    
    const user = findUserByEmail(email);

    if (!user) {
        return NextResponse.json({ error: 'User not found or invalid session for 2FA' }, { status: 404 });
    }

    // If using userIdFromToken, ensure it matches the user found by email, or just use userIdFromToken to find user
    if (userIdFromToken && user.id !== userIdFromToken) {
        return NextResponse.json({ error: 'Session mismatch for 2FA' }, { status: 400 });
    }


    if (!user.twoFactorCode || !user.twoFactorCodeExpiry || user.twoFactorCode !== code) {
      return NextResponse.json({ error: 'Invalid or expired 2FA code' }, { status: 400 });
    }

    if (new Date() > user.twoFactorCodeExpiry) {
      updateUser(user.id, { twoFactorCode: null, twoFactorCodeExpiry: null }); // Clear expired code
      return NextResponse.json({ error: '2FA code expired' }, { status: 400 });
    }

    // 2FA successful, clear code and issue full session token
    updateUser(user.id, { twoFactorCode: null, twoFactorCodeExpiry: null });
    const token = generateToken({ userId: user.id, is2FAVerified: true });

    cookies().set('aicurate_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return NextResponse.json({ message: '2FA verification successful' }, { status: 200 });

  } catch (error) {
    console.error('2FA verification error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
