import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { MotionSection } from "@/components/features/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { companyInfo } from "@/mock/data";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contáctanos para pedidos, experiencias y más información.",
};

export default function ContactoPage() {
  return (
    <div className="bg-cream">
      <section className="bg-chocolate-900 py-16 text-cream">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold">Contacto</h1>
          <p className="mt-3 text-chocolate-200">
            Estamos aquí para ayudarte con pedidos y experiencias.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <MotionSection>
            <h2 className="font-heading text-2xl font-bold text-chocolate-900">
              Escríbenos
            </h2>
            <form className="mt-6 space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="contact-name">Nombre</Label>
                <Input id="contact-name" placeholder="Tu nombre" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact-email">Correo</Label>
                <Input id="contact-email" type="email" placeholder="correo@ejemplo.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact-message">Mensaje</Label>
                <Textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Aquí irá tu mensaje..."
                />
              </div>
              <Button type="button" className="bg-cacao-green hover:bg-cacao-green/90">
                Enviar mensaje
              </Button>
              <p className="text-xs text-chocolate-400">
                Formulario visual — se conectará con Resend en producción.
              </p>
            </form>

            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-cacao-green" />
                <div>
                  <p className="font-medium text-chocolate-900">Dirección</p>
                  <p className="text-sm text-chocolate-600">{companyInfo.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-cacao-green" />
                <div>
                  <p className="font-medium text-chocolate-900">Correo</p>
                  <p className="text-sm text-chocolate-600">{companyInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-cacao-green" />
                <div>
                  <p className="font-medium text-chocolate-900">Teléfono</p>
                  <p className="text-sm text-chocolate-600">{companyInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-cacao-green" />
                <div>
                  <p className="font-medium text-chocolate-900">Horario</p>
                  <p className="text-sm text-chocolate-600">
                    Lun - Sáb: 8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </MotionSection>

          <MotionSection>
            <div className="flex h-full min-h-[400px] items-center justify-center overflow-hidden rounded-2xl border border-chocolate-200 bg-beige">
              <div className="text-center p-8">
                <MapPin className="mx-auto h-12 w-12 text-chocolate-400" />
                <p className="mt-4 font-heading text-lg font-semibold text-chocolate-700">
                  Aquí irá el mapa
                </p>
                <p className="mt-2 text-sm text-chocolate-500">
                  Mapa ficticio — se integrará Google Maps en producción.
                </p>
              </div>
            </div>
          </MotionSection>
        </div>
      </div>
    </div>
  );
}
