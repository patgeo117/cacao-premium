import { DollarSign, Package, ShoppingCart, Boxes, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/format";
import type { DashboardStats } from "@/types";

interface DashboardStatsCardsProps {
  stats: DashboardStats;
}

const cards = [
  { key: "sales" as const, label: "Ventas totales", icon: DollarSign, format: true },
  { key: "orders" as const, label: "Pedidos", icon: ShoppingCart, format: false },
  { key: "products" as const, label: "Productos", icon: Package, format: false },
  { key: "inventory" as const, label: "Inventario", icon: Boxes, format: false },
  { key: "pendingOrders" as const, label: "Pedidos pendientes", icon: Clock, format: false },
];

export function DashboardStatsCards({ stats }: DashboardStatsCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {cards.map(({ key, label, icon: Icon, format }) => (
        <Card key={key} className="border-chocolate-100 bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-chocolate-600">
              {label}
            </CardTitle>
            <Icon className="h-4 w-4 text-cacao-green" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-chocolate-900">
              {format ? formatCurrency(stats[key]) : stats[key]}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
