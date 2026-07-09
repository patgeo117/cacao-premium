"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Clock, MapPin } from "lucide-react";
import { MotionSection, MotionDiv } from "@/components/features/motion";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/format";
import { experience } from "@/mock/data";
import { useCart } from "@/hooks/use-cart";

const experienceProduct = {
  id: experience.id,
  name: experience.title,
  description: experience.description,
  cacaoPercentage: 0,
  price: experience.price,
  stock: 20,
  image: experience.image,
  category: "chocolatina" as const,
  status: "active" as const,
};

export function ExperienceSection() {
  const { addItem } = useCart();

  return (
    <MotionSection id="experiencias" className="bg-beige py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <MotionDiv>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={experience.image}
                alt={experience.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </MotionDiv>

          <MotionDiv delay={0.15}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cacao-green">
              Turismo de cacao
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-chocolate-900 sm:text-4xl">
              {experience.title}
            </h2>
            <p className="mt-4 leading-relaxed text-chocolate-600">
              {experience.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-chocolate-700">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-cacao-green" />
                {experience.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-cacao-green" />
                Fábrica de cacao
              </span>
              <span className="font-semibold text-chocolate-900">
                {formatCurrency(experience.price)} / persona
              </span>
            </div>

            <ul className="mt-8 space-y-3">
              {experience.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-chocolate-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-cacao-green" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                className="bg-cacao-green hover:bg-cacao-green/90"
                onClick={() => addItem(experienceProduct)}
              >
                Reservar experiencia
              </Button>
              <Button asChild variant="outline" className="border-chocolate-300">
                <Link href="/contacto">Más información</Link>
              </Button>
            </div>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
}
