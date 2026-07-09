"use client";

import Image from "next/image";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/format";
import { useCart } from "@/hooks/use-cart";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-chocolate-100 bg-white">
      <div className="relative aspect-square bg-beige">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
        <Badge className="absolute right-3 top-3 bg-chocolate-800 text-cream">
          {product.cacaoPercentage}% cacao
        </Badge>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-heading text-lg font-semibold text-chocolate-900">
          {product.name}
        </h3>
        <p className="mt-1 flex-1 text-sm text-chocolate-500 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-lg font-bold text-chocolate-900">
            {formatCurrency(product.price)}
          </span>
          {product.previousPrice && (
            <span className="text-sm text-chocolate-400 line-through">
              {formatCurrency(product.previousPrice)}
            </span>
          )}
        </div>
        <Button
          className="mt-3 w-full bg-chocolate-800 hover:bg-chocolate-900"
          onClick={() => addItem(product)}
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Agregar al carrito
        </Button>
      </div>
    </article>
  );
}

export function CartQuantityControls({
  quantity,
  max,
  onIncrease,
  onDecrease,
}: {
  quantity: number;
  max: number;
  onIncrease: () => void;
  onDecrease: () => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={onDecrease}
        disabled={quantity <= 1}
      >
        <Minus className="h-3 w-3" />
      </Button>
      <span className="w-6 text-center text-sm font-medium">{quantity}</span>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={onIncrease}
        disabled={quantity >= max}
      >
        <Plus className="h-3 w-3" />
      </Button>
    </div>
  );
}
