export type ProductStatus = "active" | "inactive" | "out_of_stock";

export type OrderStatus =
  | "pending"
  | "paid"
  | "preparing"
  | "shipped"
  | "delivered";

export interface Product {
  id: string;
  name: string;
  description: string;
  cacaoPercentage: number;
  price: number;
  previousPrice?: number;
  discount?: number;
  stock: number;
  image: string;
  category: "chocolatina" | "batir";
  status: ProductStatus;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDays: string;
}

export interface Order {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  city: string;
  department: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  createdAt: string;
}

export interface DashboardStats {
  sales: number;
  orders: number;
  products: number;
  inventory: number;
  pendingOrders: number;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  mission: string;
  vision: string;
  values: string[];
  email: string;
  phone: string;
  address: string;
  whatsapp: string;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  highlights: string[];
}

export interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  department: string;
  shippingMethodId: string;
}
