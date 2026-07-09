import { companyInfo } from "@/mock/data";

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-cream py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-heading text-2xl font-bold text-chocolate-900 sm:text-3xl">
          Nuestra historia
        </h2>
        <p className="mt-4 text-base leading-relaxed text-chocolate-600">
          Aquí irá la historia de la empresa. Chocolate artesanal elaborado con
          pasión desde el grano de cacao hasta la tableta, con envíos a todo
          Colombia.
        </p>
        <p className="mt-3 text-sm text-chocolate-500">{companyInfo.tagline}</p>
      </div>
    </section>
  );
}
