export const SITE_CONFIG = {
  name: "Cacao Origins",
  tagline: "Chocolate artesanal de origen",
  description:
    "Aquí irá una breve descripción de la empresa y su pasión por el cacao.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cacao-premium.vercel.app",
  locale: "es_CO",
  currency: "COP",
  vatRate: 0.19,
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/#productos", label: "Productos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const SOCIAL_LINKS = [
  { name: "WhatsApp", href: "#", placeholder: "Aquí irá WhatsApp" },
  { name: "Instagram", href: "#", placeholder: "Aquí irá Instagram" },
  { name: "Facebook", href: "#", placeholder: "Aquí irá Facebook" },
  { name: "TikTok", href: "#", placeholder: "Aquí irá TikTok" },
  { name: "YouTube", href: "#", placeholder: "Aquí irá YouTube" },
] as const;

export const ORDER_STATUS_LABELS = {
  pending: "Pendiente",
  paid: "Pagado",
  preparing: "Preparando",
  shipped: "Enviado",
  delivered: "Entregado",
} as const;

export const COLOMBIAN_DEPARTMENTS = [
  "Amazonas",
  "Antioquia",
  "Arauca",
  "Atlántico",
  "Bolívar",
  "Boyacá",
  "Caldas",
  "Caquetá",
  "Casanare",
  "Cauca",
  "Cesar",
  "Chocó",
  "Córdoba",
  "Cundinamarca",
  "Guainía",
  "Guaviare",
  "Huila",
  "La Guajira",
  "Magdalena",
  "Meta",
  "Nariño",
  "Norte de Santander",
  "Putumayo",
  "Quindío",
  "Risaralda",
  "San Andrés",
  "Santander",
  "Sucre",
  "Tolima",
  "Valle del Cauca",
  "Vaupés",
  "Vichada",
] as const;
