"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockOrders } from "@/mock/data";
import { formatCurrency, formatDate } from "@/lib/format";
import { ORDER_STATUS_LABELS } from "@/lib/constants";
import type { Order } from "@/types";

const statusColors: Record<string, string> = {
  pending: "bg-amber-100 text-amber-800",
  paid: "bg-blue-100 text-blue-800",
  preparing: "bg-purple-100 text-purple-800",
  shipped: "bg-indigo-100 text-indigo-800",
  delivered: "bg-green-100 text-green-800",
};

export default function OrdersPage() {
  const [selected, setSelected] = useState<Order | null>(null);

  return (
    <div className="min-h-screen bg-beige/30 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Button variant="ghost" size="sm" asChild className="mb-4 -ml-2">
          <Link href="/admin">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al dashboard
          </Link>
        </Button>

        <h1 className="font-heading text-3xl font-bold text-chocolate-900">
          Pedidos
        </h1>
        <p className="mt-1 text-chocolate-600">
          Listado de pedidos simulados con distintos estados.
        </p>

        <div className="mt-8 overflow-hidden rounded-xl border border-chocolate-100 bg-white">
          <Table>
            <TableHeader>
              <TableRow className="bg-beige/50">
                <TableHead>ID</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Ciudad</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-mono text-xs">{order.id}</TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{order.customerName}</p>
                      <p className="text-xs text-chocolate-500">{order.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    {order.city}, {order.department}
                  </TableCell>
                  <TableCell className="text-sm">
                    {formatDate(order.createdAt)}
                  </TableCell>
                  <TableCell>{formatCurrency(order.total)}</TableCell>
                  <TableCell>
                    <Badge className={statusColors[order.status]}>
                      {ORDER_STATUS_LABELS[order.status]}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelected(order)}
                    >
                      <Eye className="mr-1 h-4 w-4" />
                      Ver pedido
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-lg">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading">
                  Pedido {selected.id}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 text-sm">
                <div className="grid grid-cols-2 gap-2">
                  <p className="text-chocolate-500">Cliente</p>
                  <p className="font-medium">{selected.customerName}</p>
                  <p className="text-chocolate-500">Teléfono</p>
                  <p>{selected.phone}</p>
                  <p className="text-chocolate-500">Estado</p>
                  <Badge className={statusColors[selected.status]}>
                    {ORDER_STATUS_LABELS[selected.status]}
                  </Badge>
                </div>
                <div className="space-y-2">
                  {selected.items.map(({ product, quantity }) => (
                    <div key={product.id} className="flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      </div>
                      <span className="flex-1">{product.name} × {quantity}</span>
                      <span>{formatCurrency(product.price * quantity)}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between border-t pt-3 font-bold">
                  <span>Total</span>
                  <span>{formatCurrency(selected.total)}</span>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
