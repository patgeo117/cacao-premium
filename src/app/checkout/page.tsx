import type { Metadata } from "next";
import { CheckoutForm } from "@/components/features/checkout/checkout-form";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Finaliza tu compra de chocolate artesanal.",
};

export default function CheckoutPage() {
  return (
    <div className="bg-beige/50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CheckoutForm />
      </div>
    </div>
  );
}
