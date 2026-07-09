import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DashboardStatsCards } from "@/components/features/admin/dashboard-stats";
import { ProductsTable } from "@/components/features/admin/products-table";
import { dashboardStats, mockOrders } from "@/mock/data";
import { formatCurrency, formatDate } from "@/lib/format";
import { ORDER_STATUS_LABELS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Panel Administrativo",
  description: "Dashboard de administración — prototipo visual.",
  robots: { index: false, follow: false },
};

const statusColors: Record<string, string> = {
  pending: "bg-amber-100 text-amber-800",
  paid: "bg-blue-100 text-blue-800",
  preparing: "bg-purple-100 text-purple-800",
  shipped: "bg-indigo-100 text-indigo-800",
  delivered: "bg-green-100 text-green-800",
};

export default function AdminPage() {
  const recentOrders = mockOrders.slice(0, 5);

  return (
    <div className="min-h-screen bg-beige/30 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Badge variant="outline" className="mb-2 border-cacao-green text-cacao-green">
              Prototipo — sin autenticación
            </Badge>
            <h1 className="font-heading text-3xl font-bold text-chocolate-900">
              Panel Administrativo
            </h1>
            <p className="mt-1 text-chocolate-600">
              Dashboard visual con datos simulados.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/admin/pedidos">Ver todos los pedidos</Link>
          </Button>
        </div>

        <DashboardStatsCards stats={dashboardStats} />

        <div className="mt-10">
          <ProductsTable />
        </div>

        <div className="mt-10">
          <h2 className="mb-4 font-heading text-xl font-semibold text-chocolate-900">
            Pedidos recientes
          </h2>
          <div className="overflow-hidden rounded-xl border border-chocolate-100 bg-white">
            <Table>
              <TableHeader>
                <TableRow className="bg-beige/50">
                  <TableHead>ID</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Acción</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-mono text-xs">{order.id}</TableCell>
                    <TableCell>{order.customerName}</TableCell>
                    <TableCell className="text-sm text-chocolate-500">
                      {formatDate(order.createdAt)}
                    </TableCell>
                    <TableCell>{formatCurrency(order.total)}</TableCell>
                    <TableCell>
                      <Badge className={statusColors[order.status]}>
                        {ORDER_STATUS_LABELS[order.status]}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href="/admin/pedidos">
                          <Eye className="mr-1 h-4 w-4" />
                          Ver
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
