"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ShoppingBag, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NAV_LINKS } from "@/lib/constants";
import { useCart } from "@/hooks/use-cart";
import { cn } from "@/lib/utils";

export function Header() {
  const { itemCount, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-chocolate-200/60 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-chocolate-800 text-cream transition-transform group-hover:scale-105">
            <Leaf className="h-5 w-5" />
          </div>
          <div className="hidden sm:block">
            <p className="font-heading text-sm font-semibold tracking-wide text-chocolate-900">
              Aquí irá el logo
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-cacao-green">
              Cacao Premium
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-chocolate-700 transition-colors hover:text-chocolate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden bg-chocolate-800 hover:bg-chocolate-900 sm:inline-flex"
          >
            <Link href="/#productos">Comprar</Link>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="relative border-chocolate-200 bg-white/80"
            onClick={openCart}
            aria-label="Abrir carrito"
          >
            <ShoppingBag className="h-4 w-4 text-chocolate-800" />
            {itemCount > 0 && (
              <Badge className="absolute -right-1.5 -top-1.5 h-5 min-w-5 rounded-full bg-cacao-green px-1 text-[10px] text-white">
                {itemCount}
              </Badge>
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-chocolate-100 bg-cream transition-all lg:hidden",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-chocolate-700 hover:bg-beige"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/admin"
            onClick={() => setMobileOpen(false)}
            className="rounded-lg px-3 py-2.5 text-xs text-chocolate-500 hover:bg-beige"
          >
            Admin (demo)
          </Link>
        </nav>
      </div>
    </header>
  );
}
