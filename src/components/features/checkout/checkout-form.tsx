"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CreditCard, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { formatCurrency } from "@/lib/format";
import { COLOMBIAN_DEPARTMENTS } from "@/lib/constants";
import { shippingMethods } from "@/mock/data";

export function CheckoutForm() {
  const { items, subtotal, vat, total, clearCart } = useCart();
  const [shippingId, setShippingId] = useState(shippingMethods[0].id);
  const [paymentDialog, setPaymentDialog] = useState(false);

  const shipping = shippingMethods.find((s) => s.id === shippingId)!;
  const shippingCost =
    subtotal >= 120000 && shippingId === "ship-free" ? 0 : shipping.price;
  const grandTotal = total + shippingCost;

  if (items.length === 0) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
        <p className="text-chocolate-600">No hay productos en tu carrito.</p>
        <Button asChild className="bg-chocolate-800">
          <Link href="/#productos">Ver productos</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-6">
          <div>
            <Button variant="ghost" size="sm" asChild className="mb-4 -ml-2">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Seguir comprando
              </Link>
            </Button>
            <h1 className="font-heading text-3xl font-bold text-chocolate-900">
              Checkout
            </h1>
            <p className="mt-2 text-chocolate-600">
              Completa tus datos para continuar con el pago.
            </p>
          </div>

          <div className="rounded-2xl border border-chocolate-100 bg-white p-6 shadow-sm space-y-4">
            <h2 className="font-heading text-lg font-semibold">Datos de envío</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input id="name" placeholder="Aquí irá el nombre del cliente" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" type="email" placeholder="correo@ejemplo.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" placeholder="+57 300 000 0000" />
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="address">Dirección</Label>
                <Input id="address" placeholder="Calle, número, barrio" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="city">Ciudad</Label>
                <Input id="city" placeholder="Ciudad" />
              </div>
              <div className="grid gap-2">
                <Label>Departamento</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    {COLOMBIAN_DEPARTMENTS.map((d) => (
                      <SelectItem key={d} value={d}>
                        {d}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-chocolate-100 bg-white p-6 shadow-sm space-y-4">
            <h2 className="font-heading text-lg font-semibold">Método de envío</h2>
            <div className="space-y-3">
              {shippingMethods.map((method) => (
                <label
                  key={method.id}
                  className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-colors ${
                    shippingId === method.id
                      ? "border-cacao-green bg-cacao-green/5"
                      : "border-chocolate-100 hover:border-chocolate-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping"
                      checked={shippingId === method.id}
                      onChange={() => setShippingId(method.id)}
                      className="accent-cacao-green"
                    />
                    <div>
                      <p className="font-medium text-chocolate-900">{method.name}</p>
                      <p className="text-sm text-chocolate-500">{method.description}</p>
                    </div>
                  </div>
                  <span className="font-semibold text-chocolate-900">
                    {method.price === 0 ? "Gratis" : formatCurrency(method.price)}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="sticky top-24 rounded-2xl border border-chocolate-100 bg-white p-6 shadow-sm">
            <h2 className="font-heading text-lg font-semibold text-chocolate-900">
              Resumen del pedido
            </h2>
            <div className="mt-4 space-y-3">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-3">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-chocolate-900">
                      {product.name}
                    </p>
                    <p className="text-xs text-chocolate-500">Cant: {quantity}</p>
                  </div>
                  <span className="text-sm font-medium">
                    {formatCurrency(product.price * quantity)}
                  </span>
                </div>
              ))}
            </div>

            <Separator className="my-4" />

            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-chocolate-600">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between text-chocolate-600">
                <span>IVA (19%)</span>
                <span>{formatCurrency(vat)}</span>
              </div>
              <div className="flex justify-between text-chocolate-600">
                <span>Envío</span>
                <span>{formatCurrency(shippingCost)}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-bold text-chocolate-900">
                <span>Total</span>
                <span>{formatCurrency(grandTotal)}</span>
              </div>
            </div>

            <Button
              className="mt-6 w-full bg-cacao-green hover:bg-cacao-green/90"
              size="lg"
              onClick={() => setPaymentDialog(true)}
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Proceder al pago
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={paymentDialog} onOpenChange={setPaymentDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-heading">Pasarela de pagos</DialogTitle>
            <DialogDescription className="text-base pt-2">
              Aquí se integrará la pasarela de pagos.
            </DialogDescription>
          </DialogHeader>
          <p className="text-sm text-chocolate-600">
            En producción se conectará Wompi o Mercado Pago para procesar pagos
            de forma segura.
          </p>
          <Button
            className="bg-chocolate-800"
            onClick={() => {
              setPaymentDialog(false);
              clearCart();
            }}
          >
            Entendido
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
