// src/lib/auth.ts
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import type { User } from '@/types/auth'; // We'll define this type

// THIS IS NOT SECURE FOR PRODUCTION. Use a real database.
let users: User[] = [];
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-needs-to-be-long-and-random'; // Store in .env
const JWT_EXPIRES_IN = '1h';
const JWT_2FA_EXPIRES_IN = '10m'; // Shorter expiry for pre-2FA token

if (!process.env.JWT_SECRET) {
  console.warn("JWT_SECRET is not set in .env. Using default insecure secret.");
}

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

export function findUserByEmail(email: string): User | undefined {
  return users.find(user => user.email.toLowerCase() === email.toLowerCase());
}

export function createUser(user: Omit<User, 'id' | 'hashedPassword' | 'twoFactorCode' | 'twoFactorCodeExpiry'> & { password: string }): User {
  const newUser: User = {
    id: String(users.length + 1),
    fullName: user.fullName,
    email: user.email.toLowerCase(),
    hashedPassword: '', // Will be set after hashing
    twoFactorCode: null,
    twoFactorCodeExpiry: null,
  };
  // In a real app, password hashing would be part of this function or done before calling it
  users.push(newUser);
  return newUser;
}

export function updateUser(userId: string, updates: Partial<User>): User | undefined {
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex === -1) return undefined;
  users[userIndex] = { ...users[userIndex], ...updates };
  return users[userIndex];
}

export function generateToken(payload: object, options?: jwt.SignOptions): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN, ...options });
}

export function generate2FAToken(payload: object): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_2FA_EXPIRES_IN });
}

export function verifyToken(token: string): Record<string, any> | null {
  try {
    return jwt.verify(token, JWT_SECRET) as Record<string, any>;
  } catch (error) {
    return null;
  }
}

export function generate2FACode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit code
}

// Helper function to clear users - useful for testing in-memory store
export function clearUsersForTesting() {
  users = [];
}
