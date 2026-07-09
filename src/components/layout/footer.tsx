import Link from "next/link";
import { Leaf } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { companyInfo } from "@/mock/data";

export function Footer() {
  return (
    <footer className="border-t border-chocolate-200 bg-chocolate-900 py-10 text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:justify-between sm:px-6">
        <div className="max-w-sm">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cacao-green">
              <Leaf className="h-4 w-4" />
            </div>
            <span className="font-heading font-semibold">Aquí irá el logo</span>
          </div>
          <p className="mt-3 text-sm text-chocolate-300">
            Chocolate artesanal 100% cacao colombiano.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gold">
            Enlaces
          </p>
          <ul className="mt-3 space-y-2 text-sm text-chocolate-300">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gold">
            Contacto
          </p>
          <ul className="mt-3 space-y-1 text-sm text-chocolate-300">
            <li>{companyInfo.phone}</li>
            <li>{companyInfo.email}</li>
          </ul>
          <a
            href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, "")}`}
            className="mt-3 inline-block text-sm text-cacao-green-light hover:text-white"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-chocolate-700 px-4 pt-6 text-xs text-chocolate-500 sm:flex-row sm:px-6">
        <p>© 2026 Gep,</p>
        <p>Desarrollado por George Patiño</p>
      </div>
    </footer>
  );
}
