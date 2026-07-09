"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
  const isLowStock = product.stock > 0 && product.stock <= 10;
  const isOutOfStock = product.stock === 0;

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-chocolate-100 bg-white shadow-sm transition-shadow hover:shadow-lg hover:shadow-chocolate-900/5"
    >
      <div className="relative aspect-square overflow-hidden bg-beige">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {product.discount && (
          <Badge className="absolute left-3 top-3 bg-cacao-green text-white">
            -{product.discount}%
          </Badge>
        )}
        <Badge
          variant="secondary"
          className="absolute right-3 top-3 bg-chocolate-900/80 text-cream backdrop-blur-sm"
        >
          {product.cacaoPercentage}% cacao
        </Badge>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-semibold text-chocolate-900">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-chocolate-500">
          {product.description}
        </p>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-xl font-bold text-chocolate-900">
            {formatCurrency(product.price)}
          </span>
          {product.previousPrice && (
            <span className="text-sm text-chocolate-400 line-through">
              {formatCurrency(product.previousPrice)}
            </span>
          )}
        </div>

        <p className="mt-1 text-xs text-chocolate-500">
          {isOutOfStock ? (
            <span className="text-red-600">Agotado</span>
          ) : isLowStock ? (
            <span className="text-amber-600">Últimas {product.stock} unidades</span>
          ) : (
            <span>{product.stock} disponibles</span>
          )}
        </p>

        <Button
          className="mt-4 w-full bg-chocolate-800 hover:bg-chocolate-900"
          disabled={isOutOfStock}
          onClick={() => addItem(product)}
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Agregar al carrito
        </Button>
      </div>
    </motion.article>
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
