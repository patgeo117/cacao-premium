"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { formatCurrency } from "@/lib/format";
import { CartQuantityControls } from "@/components/features/products/product-card";

export function CartSidebar() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
    vat,
    total,
  } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-heading text-chocolate-900">
            Tu carrito
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-beige">
              <ShoppingBag className="h-7 w-7 text-chocolate-400" />
            </div>
            <p className="text-sm text-chocolate-500">
              Tu carrito está vacío. Explora nuestros chocolates artesanales.
            </p>
            <Button variant="outline" onClick={closeCart} asChild>
              <Link href="/#productos">Ver productos</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto py-4">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex gap-3 rounded-xl border border-chocolate-100 p-3"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-beige">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium text-chocolate-900">
                          {product.name}
                        </p>
                        <p className="text-sm text-chocolate-600">
                          {formatCurrency(product.price)}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-chocolate-400 hover:text-red-600"
                        onClick={() => removeItem(product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <CartQuantityControls
                        quantity={quantity}
                        max={product.stock}
                        onIncrease={() => updateQuantity(product.id, quantity + 1)}
                        onDecrease={() => updateQuantity(product.id, quantity - 1)}
                      />
                      <span className="text-sm font-semibold text-chocolate-900">
                        {formatCurrency(product.price * quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <SheetFooter className="flex-col gap-4 sm:flex-col">
              <div className="w-full space-y-2 text-sm">
                <div className="flex justify-between text-chocolate-600">
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-chocolate-600">
                  <span>IVA (19%)</span>
                  <span>{formatCurrency(vat)}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-base font-semibold text-chocolate-900">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>
              <Button
                asChild
                className="w-full bg-chocolate-800 hover:bg-chocolate-900"
                onClick={closeCart}
              >
                <Link href="/checkout">Continuar compra</Link>
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
