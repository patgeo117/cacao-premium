/**
 * Environment variables schema — prepared for production.
 * Will be validated with Zod when backend is connected.
 *
 * @example
 * DATABASE_URL, JWT_SECRET, WOMPI_PUBLIC_KEY, CLOUDINARY_URL, RESEND_API_KEY
 */
export const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001/api",
  // Future: Wompi, Mercado Pago, Cloudinary, Resend
  wompiPublicKey: process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY ?? "",
  mercadoPagoPublicKey: process.env.NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY ?? "",
} as const;
