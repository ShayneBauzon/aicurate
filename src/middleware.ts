
// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// import { verifyToken } from '@/lib/auth'; // Commented out as verifyToken no longer exists
// import type { JWTPayload } from '@/types/auth'; // Commented out as JWTPayload no longer exists

// const PROTECTED_ROUTES = ['/main'];
// const AUTH_ROUTES = ['/login', '/register', '/verify-2fa']; // Routes related to authentication process

export function middleware(request: NextRequest) {
  // const { pathname } = request.nextUrl;
  // const sessionCookie = request.cookies.get('aicurate_session');
  // const sessionToken = sessionCookie?.value;

  // let userPayload: JWTPayload | null = null;
  // if (sessionToken) {
  //   userPayload = verifyToken(sessionToken) as JWTPayload | null;
  // }

  // const isProtectedRoute = PROTECTED_ROUTES.some(route => pathname.startsWith(route));
  // const isAuthRoute = AUTH_ROUTES.some(route => pathname.startsWith(route));

  // if (isProtectedRoute) {
  //   if (!userPayload) {
  //     // No session or invalid session, redirect to login
  //     return NextResponse.redirect(new URL('/login', request.url));
  //   }
  //   if (!userPayload.is2FAVerified) {
  //     // Session exists but 2FA not verified, redirect to 2FA page
  //     return NextResponse.redirect(new URL('/verify-2fa', request.url));
  //   }
  //   // User is authenticated and 2FA verified, allow access
  //   return NextResponse.next();
  // }

  // if (isAuthRoute) {
  //   if (userPayload && userPayload.is2FAVerified && pathname !== '/verify-2fa') {
  //       // If user is fully authenticated and tries to access login/register, redirect to main
  //       // Allow access to /verify-2fa if they somehow land there while fully auth, though UI should prevent this.
  //       return NextResponse.redirect(new URL('/main', request.url));
  //   }
  //   if (userPayload && !userPayload.is2FAVerified && pathname !== '/verify-2fa') {
  //       // If user is pending 2FA and tries to access login/register, redirect to verify-2fa
  //       return NextResponse.redirect(new URL('/verify-2fa', request.url));
  //   }
  //   // Allow access to auth routes if not fully authenticated or specifically going to /verify-2fa when pending
  // }

  // // For root page, if user is fully authenticated, redirect to main
  // if (pathname === '/') {
  //     if (userPayload && userPayload.is2FAVerified) {
  //         return NextResponse.redirect(new URL('/main', request.url));
  //     }
  //     // If not fully authenticated (or no session), the /pages/page.tsx redirect to /login will handle it.
  // }


  return NextResponse.next();
}

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   * - photos (public photos folder)
   *
   * Commenting out matcher to disable middleware for now
   */
  // matcher: [
  //   '/((?!api|_next/static|_next/image|favicon.ico|photos).*)',
  // ],
};
