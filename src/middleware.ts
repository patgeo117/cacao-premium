import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware placeholder — prepared for JWT auth, roles, and rate limiting.
 *
 * Future implementation:
 * - Verify JWT tokens for /admin routes
 * - Role-based access control (admin, customer)
 * - Rate limiting with Redis/Upstash
 * - CSRF protection headers
 * - Security headers (CSP, HSTS, X-Frame-Options)
 */
export function middleware(_request: NextRequest) {
  // Prototype: no auth required
  const response = NextResponse.next();

  // Prepared security headers (basic)
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
