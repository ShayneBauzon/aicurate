// src/app/api/auth/register/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { findUserByEmail, createUser, hashPassword } from '@/lib/auth';

const registerSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = registerSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: 'Invalid input', details: validation.error.errors }, { status: 400 });
    }

    const { fullName, email, password } = validation.data;

    if (findUserByEmail(email)) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 });
    }

    const hashedPassword = await hashPassword(password);
    const newUser = createUser({ fullName, email, password }); // createUser doesn't use password directly
    newUser.hashedPassword = hashedPassword; // Set it here

    // In a real app, you might want to log the user in or send a verification email
    // For this demo, we'll just return success
    return NextResponse.json({ message: 'User registered successfully', userId: newUser.id }, { status: 201 });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
