"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Product } from "@/types";

interface ProductFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product | null;
  onSave: (product: Product) => void;
}

const emptyProduct: Product = {
  id: "",
  name: "",
  description: "",
  cacaoPercentage: 70,
  price: 0,
  stock: 0,
  image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=800&q=80",
  category: "chocolatina",
  status: "active",
};

export function ProductFormModal({
  open,
  onOpenChange,
  product,
  onSave,
}: ProductFormModalProps) {
  const [form, setForm] = useState<Product>(product ?? emptyProduct);

  const handleOpen = (isOpen: boolean) => {
    if (isOpen) setForm(product ?? emptyProduct);
    onOpenChange(isOpen);
  };

  const update = <K extends keyof Product>(key: K, value: Product[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-heading">
            {product ? "Editar producto" : "Agregar producto"}
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-2">
          <div className="grid gap-2">
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Nombre del producto"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="price">Precio</Label>
              <Input
                id="price"
                type="number"
                value={form.price}
                onChange={(e) => update("price", Number(e.target.value))}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="previousPrice">Precio anterior</Label>
              <Input
                id="previousPrice"
                type="number"
                value={form.previousPrice ?? ""}
                onChange={(e) =>
                  update("previousPrice", e.target.value ? Number(e.target.value) : undefined)
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="discount">Descuento %</Label>
              <Input
                id="discount"
                type="number"
                value={form.discount ?? ""}
                onChange={(e) =>
                  update("discount", e.target.value ? Number(e.target.value) : undefined)
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="stock">Stock</Label>
              <Input
                id="stock"
                type="number"
                value={form.stock}
                onChange={(e) => update("stock", Number(e.target.value))}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cacao">% Cacao</Label>
              <Input
                id="cacao"
                type="number"
                value={form.cacaoPercentage}
                onChange={(e) => update("cacaoPercentage", Number(e.target.value))}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label>Categoría</Label>
              <Select
                value={form.category}
                onValueChange={(v) => update("category", v as Product["category"])}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="chocolatina">Chocolatina</SelectItem>
                  <SelectItem value="batir">Para batir</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label>Estado</Label>
              <Select
                value={form.status}
                onValueChange={(v) => update("status", v as Product["status"])}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Activo</SelectItem>
                  <SelectItem value="inactive">Inactivo</SelectItem>
                  <SelectItem value="out_of_stock">Agotado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button
            className="bg-chocolate-800 hover:bg-chocolate-900"
            onClick={() =>
              onSave({ ...form, id: form.id || product?.id || `prod-${Date.now()}` })
            }
          >
            Guardar cambios
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
