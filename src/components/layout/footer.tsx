import Link from "next/link";
import { Leaf, MessageCircle } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { companyInfo } from "@/mock/data";
import { Separator } from "@/components/ui/separator";

const socialIcons: Record<string, string> = {
  WhatsApp: "WA",
  Instagram: "IG",
  Facebook: "FB",
  TikTok: "TT",
  YouTube: "YT",
};

export function Footer() {
  return (
    <footer className="border-t border-chocolate-200/60 bg-chocolate-900 text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cacao-green">
                <Leaf className="h-4 w-4 text-cream" />
              </div>
              <span className="font-heading text-lg font-semibold">
                Aquí irá el logo
              </span>
            </div>
            <p className="text-sm leading-relaxed text-chocolate-200">
              Aquí irá una historia corta de la empresa. Chocolate artesanal
              100% cacao colombiano, elaborado con pasión desde el grano hasta
              la tableta.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-gold">
              Navegación
            </h3>
            <ul className="space-y-2 text-sm text-chocolate-200">
              <li><Link href="/" className="hover:text-white">Inicio</Link></li>
              <li><Link href="/#productos" className="hover:text-white">Productos</Link></li>
              <li><Link href="/#experiencias" className="hover:text-white">Experiencias</Link></li>
              <li><Link href="/nosotros" className="hover:text-white">Nosotros</Link></li>
              <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-gold">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm text-chocolate-200">
              <li>{companyInfo.address}</li>
              <li>{companyInfo.email}</li>
              <li>{companyInfo.phone}</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-gold">
              Redes sociales
            </h3>
            <p className="mb-4 text-xs text-chocolate-300">
              Aquí irán las redes sociales.
            </p>
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  title={social.placeholder}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-chocolate-700 text-xs font-medium text-chocolate-200 transition-colors hover:border-gold hover:text-gold"
                >
                  {socialIcons[social.name]}
                </a>
              ))}
            </div>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-2 text-sm text-cacao-green-light hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <Separator className="my-8 bg-chocolate-700" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-chocolate-400 sm:flex-row">
          <p>© 2026 Trip Digital — Prototipo demostrativo</p>
          <p>Desarrollado para evolucionar a producción con NestJS + PostgreSQL</p>
        </div>
      </div>
    </footer>
  );
}
