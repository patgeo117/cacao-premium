"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Trash2, ShoppingBag } from "lucide-react";
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
import { companyInfo } from "@/mock/data";
import { CartQuantityControls } from "@/components/features/products/product-card";

function buildWhatsAppUrl(items: ReturnType<typeof useCart>["items"], total: number) {
  const lines = items.map(
    ({ product, quantity }) =>
      `• ${product.name} x${quantity} — ${formatCurrency(product.price * quantity)}`,
  );
  const message = [
    "Hola, quiero hacer un pedido:",
    "",
    ...lines,
    "",
    `Total estimado: ${formatCurrency(total)}`,
    "",
    "Aquí irán mis datos de envío.",
  ].join("\n");

  const phone = companyInfo.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

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

  const whatsappUrl = items.length > 0 ? buildWhatsAppUrl(items, total) : "#";

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
            <ShoppingBag className="h-10 w-10 text-chocolate-300" />
            <p className="text-sm text-chocolate-500">Tu carrito está vacío.</p>
            <Button variant="outline" onClick={closeCart} asChild>
              <Link href="/#productos">Ver productos</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-3 overflow-y-auto py-4">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex gap-3 rounded-lg border border-chocolate-100 p-3"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-beige">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium">{product.name}</p>
                        <p className="text-sm text-chocolate-600">
                          {formatCurrency(product.price)}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-chocolate-400"
                        onClick={() => removeItem(product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <CartQuantityControls
                        quantity={quantity}
                        max={product.stock}
                        onIncrease={() => updateQuantity(product.id, quantity + 1)}
                        onDecrease={() => updateQuantity(product.id, quantity - 1)}
                      />
                      <span className="text-sm font-semibold">
                        {formatCurrency(product.price * quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <SheetFooter className="flex-col gap-3 sm:flex-col">
              <div className="w-full space-y-1 text-sm">
                <div className="flex justify-between text-chocolate-600">
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-chocolate-600">
                  <span>IVA (19%)</span>
                  <span>{formatCurrency(vat)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-semibold text-chocolate-900">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>
              <Button
                asChild
                className="w-full bg-cacao-green hover:bg-cacao-green/90"
                onClick={closeCart}
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Pedir por WhatsApp
                </a>
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
