"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/mock/data";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1920&q=80"
        alt="Plantación de cacao"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-chocolate-950/85 via-chocolate-900/70 to-chocolate-900/40" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Cacao 100% Colombiano
          </div>

          <h1 className="font-heading text-4xl font-bold leading-tight text-cream sm:text-5xl lg:text-6xl">
            {companyInfo.name}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-chocolate-100 sm:text-xl">
            {companyInfo.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-cacao-green hover:bg-cacao-green/90 text-white shadow-lg shadow-cacao-green/20"
            >
              <Link href="/#productos">
                Comprar ahora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-cream/30 bg-white/10 text-cream backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              <Link href="/#experiencias">Conocer la experiencia</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="h-12 w-6 rounded-full border-2 border-cream/40 p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mx-auto h-2 w-1 rounded-full bg-cream/60"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
