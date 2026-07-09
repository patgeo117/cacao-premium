export const SITE_CONFIG = {
  name: "Cacao Origins",
  tagline: "Chocolate artesanal de origen",
  description:
    "Aquí irá una breve descripción de la empresa y su pasión por el cacao.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cacao-premium.vercel.app",
  locale: "es_CO",
  currency: "COP",
  vatRate: 0.19,
  whatsapp: "573000000000",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/#productos", label: "Productos" },
  { href: "/#contacto", label: "Contacto" },
] as const;

export const SOCIAL_LINKS = [
  { name: "WhatsApp", href: "https://wa.me/573000000000" },
  { name: "Instagram", href: "#" },
] as const;
