// src/types/auth.d.ts
export interface User {
  id: string;
  fullName: string;
  email: string;
  hashedPassword?: string; // Optional because we might not always send it to client
  twoFactorCode: string | null;
  twoFactorCodeExpiry: Date | null;
}

export interface JWTPayload {
  userId: string;
  is2FAVerified: boolean;
  iat?: number;
  exp?: number;
}
