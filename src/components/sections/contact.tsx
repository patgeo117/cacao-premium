import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { companyInfo } from "@/mock/data";

export function ContactSection() {
  return (
    <section id="contacto" className="bg-beige py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-chocolate-900">
              Contacto
            </h2>
            <p className="mt-2 text-chocolate-600">
              Escríbenos o pide tus chocolates por WhatsApp.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-chocolate-700">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cacao-green" />
                {companyInfo.address}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-cacao-green" />
                {companyInfo.email}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-cacao-green" />
                {companyInfo.phone}
              </li>
            </ul>

            <Button asChild className="mt-6 bg-cacao-green hover:bg-cacao-green/90">
              <a
                href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir por WhatsApp
              </a>
            </Button>
          </div>

          <div className="rounded-xl border border-chocolate-100 bg-white p-6">
            <form className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" placeholder="Tu nombre" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Correo</Label>
                <Input id="email" type="email" placeholder="correo@ejemplo.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" rows={4} placeholder="Tu mensaje..." />
              </div>
              <Button type="button" variant="outline" className="w-full">
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
