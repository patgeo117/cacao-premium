"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/mock/data";

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1920&q=80"
        alt="Plantación de cacao"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-chocolate-950/70" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Cacao 100% Colombiano
        </p>
        <h1 className="mt-4 max-w-xl font-heading text-4xl font-bold leading-tight text-cream sm:text-5xl">
          {companyInfo.name}
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-chocolate-100 sm:text-lg">
          {companyInfo.description}
        </p>
        <div className="mt-8">
          <Button
            asChild
            size="lg"
            className="bg-cacao-green hover:bg-cacao-green/90"
          >
            <Link href="/#productos">
              Ver productos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
