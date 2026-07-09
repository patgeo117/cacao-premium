import type { Metadata } from "next";
import Image from "next/image";
import { MotionSection, MotionDiv } from "@/components/features/motion";
import { galleryImages, timelineEvents } from "@/mock/data";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Aquí irá la historia de la empresa de chocolate artesanal.",
};

export default function NosotrosPage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1920&q=80"
          alt="Aquí irá fotografía de la empresa"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-chocolate-950/50" />
        <div className="relative flex h-full items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <h1 className="font-heading text-4xl font-bold text-cream sm:text-5xl">
              Nosotros
            </h1>
            <p className="mt-3 max-w-xl text-lg text-chocolate-100">
              Aquí irá la historia de la empresa.
            </p>
          </div>
        </div>
      </section>

      <MotionSection className="py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-chocolate-600">
            Aquí irá la historia completa de la empresa. Desde el primer árbol de
            cacao plantado en nuestras tierras, hasta convertirnos en referente
            de chocolate artesanal premium en Colombia. Cada tableta cuenta una
            historia de dedicación, tradición y respeto por la naturaleza.
          </p>
        </div>
      </MotionSection>

      <section className="bg-beige py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-bold text-chocolate-900">
            Nuestra trayectoria
          </h2>
          <div className="relative mt-16">
            <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-chocolate-200 lg:block" />
            <div className="space-y-12">
              {timelineEvents.map((event, i) => (
                <MotionDiv key={event.year} delay={i * 0.1}>
                  <div
                    className={`flex flex-col gap-4 lg:flex-row ${
                      i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div className="flex-1" />
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center self-center rounded-full bg-chocolate-800 font-heading text-sm font-bold text-cream">
                      {event.year}
                    </div>
                    <div className="flex-1 rounded-2xl border border-chocolate-100 bg-white p-6 shadow-sm">
                      <h3 className="font-heading text-lg font-semibold text-chocolate-900">
                        {event.title}
                      </h3>
                      <p className="mt-2 text-sm text-chocolate-600">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-bold text-chocolate-900">
            Galería
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((src, i) => (
              <MotionDiv key={src} delay={i * 0.05}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={src}
                    alt={`Galería ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </MotionSection>
    </>
  );
}
