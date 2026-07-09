import { ProductCard } from "@/components/features/products/product-card";
import { products } from "@/mock/data";

export function CatalogSection() {
  return (
    <section id="productos" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-2xl font-bold text-chocolate-900 sm:text-3xl">
            Nuestros chocolates
          </h2>
          <p className="mt-2 text-chocolate-600">
            Selecciona tus favoritos y pide por WhatsApp.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
