import { z } from "zod";

/**
 * Checkout form schema — prepared for React Hook Form + Zod validation.
 * Not wired yet; checkout uses visual simulation.
 */
export const checkoutSchema = z.object({
  name: z.string().min(2, "Nombre requerido"),
  email: z.string().email("Correo inválido"),
  phone: z.string().min(10, "Teléfono inválido"),
  address: z.string().min(5, "Dirección requerida"),
  city: z.string().min(2, "Ciudad requerida"),
  department: z.string().min(2, "Departamento requerido"),
  shippingMethodId: z.string().min(1, "Seleccione método de envío"),
});

export type CheckoutSchema = z.infer<typeof checkoutSchema>;

export const productSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(10),
  cacaoPercentage: z.number().min(1).max(100),
  price: z.number().positive(),
  previousPrice: z.number().positive().optional(),
  discount: z.number().min(0).max(100).optional(),
  stock: z.number().int().min(0),
  category: z.enum(["chocolatina", "batir"]),
  status: z.enum(["active", "inactive", "out_of_stock"]),
});

export type ProductSchema = z.infer<typeof productSchema>;
