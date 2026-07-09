import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pedidos",
  robots: { index: false, follow: false },
};

export default function PedidosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
