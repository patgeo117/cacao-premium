/**
 * Security utilities placeholder — prepared for production.
 *
 * Future implementations:
 * - JWT verification helpers
 * - Role-based access control guards
 * - Input sanitization (DOMPurify)
 * - CSRF token generation/validation
 * - Rate limiting configuration
 * - OWASP security headers config
 */

export const SECURITY_CONFIG = {
  jwtExpiresIn: "7d",
  roles: ["admin", "customer"] as const,
  rateLimit: {
    windowMs: 15 * 60 * 1000,
    maxRequests: 100,
  },
} as const;

export type UserRole = (typeof SECURITY_CONFIG.roles)[number];
