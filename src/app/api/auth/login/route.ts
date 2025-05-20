// src/app/api/auth/login/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { findUserByEmail, verifyPassword, generate2FAToken, generate2FACode, updateUser } from '@/lib/auth';
import { cookies } from 'next/headers';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = loginSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: 'Invalid input', details: validation.error.errors }, { status: 400 });
    }

    const { email, password } = validation.data;
    const user = findUserByEmail(email);

    if (!user || !user.hashedPassword || !(await verifyPassword(password, user.hashedPassword))) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    // Generate 2FA code
    const twoFactorCode = generate2FACode();
    const twoFactorCodeExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
    updateUser(user.id, { twoFactorCode, twoFactorCodeExpiry });

    console.log(`AIcurate DEV: 2FA code for ${user.email}: ${twoFactorCode}`); // Simulate sending email

    // Generate a pre-2FA token
    const token = generate2FAToken({ userId: user.id, is2FAVerified: false });

    cookies().set('aicurate_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 10, // 10 minutes for pre-2FA token
    });

    return NextResponse.json({ message: 'Login successful, 2FA required', userId: user.id }, { status: 200 });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
