import Image from "next/image";
import { Target, Eye, Heart } from "lucide-react";
import { MotionSection, MotionDiv } from "@/components/features/motion";
import { companyInfo } from "@/mock/data";
import { Card, CardContent } from "@/components/ui/card";

const blocks = [
  { icon: Target, title: "Misión", content: companyInfo.mission },
  { icon: Eye, title: "Visión", content: companyInfo.vision },
  { icon: Heart, title: "Valores", content: companyInfo.values.join(" · ") },
];

export function HistorySection() {
  return (
    <MotionSection id="historia" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <MotionDiv>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cacao-green">
              Nuestra esencia
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-chocolate-900 sm:text-4xl">
              Nuestra historia
            </h2>
            <p className="mt-6 text-base leading-relaxed text-chocolate-600">
              Aquí irá la historia de la empresa. Desde las montañas donde
              crece el cacao fino de aroma, hasta el momento en que cada tableta
              llega a tus manos — cada paso es un acto de amor por el oficio
              chocolatero.
            </p>
          </MotionDiv>

          <MotionDiv delay={0.2}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl shadow-chocolate-900/10">
              <Image
                src="https://images.unsplash.com/photo-1606312619070-d48b4cbc6b3f?w=800&q=80"
                alt="Aquí irá imagen de la empresa"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-chocolate-900/10 rounded-2xl" />
            </div>
          </MotionDiv>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          {blocks.map((block, i) => (
            <MotionDiv key={block.title} delay={i * 0.1}>
              <Card className="h-full border-chocolate-100 bg-white/80 shadow-sm transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-beige">
                    <block.icon className="h-5 w-5 text-chocolate-800" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-chocolate-900">
                    {block.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-chocolate-600">
                    {block.content}
                  </p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
