import { MotionSection, MotionDiv } from "@/components/features/motion";
import { ProductCard } from "@/components/features/products/product-card";
import { products } from "@/mock/data";

export function CatalogSection() {
  return (
    <MotionSection id="productos" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cacao-green">
            Colección artesanal
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-chocolate-900 sm:text-4xl">
            Nuestros chocolates
          </h2>
          <p className="mt-4 text-chocolate-600">
            Cinco creaciones únicas con distintos porcentajes de cacao.
            Envíos a todo Colombia.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <MotionDiv key={product.id} delay={i * 0.08}>
              <ProductCard product={product} />
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
