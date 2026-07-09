import type { Product, CompanyInfo, Experience, ShippingMethod, DashboardStats, Order } from "@/types";

export const companyInfo: CompanyInfo = {
  name: "Aquí irá el nombre de la empresa",
  tagline: "Del árbol a tu mesa — cacao 100% colombiano",
  description:
    "Aquí irá una breve descripción de la empresa y su pasión por el cacao. Cultivamos, fermentamos y transformamos el mejor grano en chocolate artesanal con envíos a todo el país.",
  mission:
    "Aquí irá la misión de la empresa. Compartir el auténtico sabor del cacao colombiano con el mundo, respetando a los productores y la naturaleza.",
  vision:
    "Aquí irá la visión de la empresa. Ser referente nacional en chocolate artesanal premium y experiencias de turismo de cacao.",
  values: [
    "Origen trazable y comercio justo",
    "Procesos artesanales sin atajos",
    "Sostenibilidad y respeto por la tierra",
    "Excelencia en cada tableta",
  ],
  email: "contacto@empresa-ejemplo.com",
  phone: "+57 300 000 0000",
  address: "Aquí irá la dirección de la fábrica, Colombia",
  whatsapp: "+57 300 000 0000",
};

export const products: Product[] = [
  {
    id: "prod-99",
    name: "Chocolatina Cacao 99%",
    description:
      "Tableta intensa de cacao puro. Notas profundas a frutos secos y especias. Ideal para paladares exigentes.",
    cacaoPercentage: 99,
    price: 28000,
    previousPrice: 32000,
    discount: 12,
    stock: 45,
    image: "https://images.unsplash.com/photo-1606312619070-d48b4cbc6b3f?w=800&q=80",
    category: "chocolatina",
    status: "active",
  },
  {
    id: "prod-70",
    name: "Chocolatina Cacao 70%",
    description:
      "Equilibrio perfecto entre intensidad y suavidad. El bestseller de la casa con notas a cacao y miel.",
    cacaoPercentage: 70,
    price: 24000,
    stock: 120,
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=800&q=80",
    category: "chocolatina",
    status: "active",
  },
  {
    id: "prod-55",
    name: "Chocolatina Cacao 55%",
    description:
      "Chocolate de mesa suave y cremoso. Perfecto para acompañar tardes de café o regalar.",
    cacaoPercentage: 55,
    price: 20000,
    previousPrice: 22000,
    discount: 9,
    stock: 85,
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&q=80",
    category: "chocolatina",
    status: "active",
  },
  {
    id: "prod-36",
    name: "Chocolatina Cacao 36%",
    description:
      "Dulce y delicada, con notas lácteas y vainilla natural. La favorita de los más jóvenes.",
    cacaoPercentage: 36,
    price: 18000,
    stock: 60,
    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d8?w=800&q=80",
    category: "chocolatina",
    status: "active",
  },
  {
    id: "prod-batir",
    name: "Chocolate para Batir Artesanal",
    description:
      "Tableta especial para taza. Disponible en 70%, 55% y 36% de cacao. Se disuelve en leche caliente creando una bebida cremosa.",
    cacaoPercentage: 70,
    price: 22000,
    stock: 95,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80",
    category: "batir",
    status: "active",
  },
];

export const experience: Experience = {
  id: "exp-fabrica",
  title: "Experiencia en la Fábrica de Cacao",
  description:
    "Aquí irá la descripción de la experiencia. Un pasadía inmersivo desde la mata de cacao hasta la tableta final. Incluye tour guiado, degustación y taller de chocolate.",
  price: 80000,
  duration: "4 horas",
  image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1200&q=80",
  highlights: [
    "Recorrido por plantación de cacao",
    "Proceso de fermentación y secado",
    "Taller de elaboración artesanal",
    "Degustación de todos los porcentajes",
    "Souvenir de chocolatina artesanal",
  ],
};

export const shippingMethods: ShippingMethod[] = [
  {
    id: "ship-standard",
    name: "Envío estándar nacional",
    description: "Entrega en 3-5 días hábiles a nivel nacional",
    price: 12000,
    estimatedDays: "3-5 días",
  },
  {
    id: "ship-express",
    name: "Envío express",
    description: "Entrega en 1-2 días hábiles en ciudades principales",
    price: 22000,
    estimatedDays: "1-2 días",
  },
  {
    id: "ship-free",
    name: "Envío gratis",
    description: "En pedidos superiores a $120.000 COP",
    price: 0,
    estimatedDays: "3-5 días",
  },
];

export const dashboardStats: DashboardStats = {
  sales: 4850000,
  orders: 127,
  products: 5,
  inventory: 405,
  pendingOrders: 8,
};

export const mockOrders: Order[] = [
  {
    id: "ORD-2026-001",
    customerName: "María González",
    email: "maria@ejemplo.com",
    phone: "+57 310 111 2233",
    city: "Bogotá",
    department: "Cundinamarca",
    items: [{ product: products[1], quantity: 2 }],
    total: 57120,
    status: "pending",
    createdAt: "2026-07-08T10:30:00",
  },
  {
    id: "ORD-2026-002",
    customerName: "Carlos Ruiz",
    email: "carlos@ejemplo.com",
    phone: "+57 320 444 5566",
    city: "Medellín",
    department: "Antioquia",
    items: [{ product: products[0], quantity: 3 }, { product: products[4], quantity: 1 }],
    total: 110180,
    status: "paid",
    createdAt: "2026-07-07T15:45:00",
  },
  {
    id: "ORD-2026-003",
    customerName: "Ana Lucía Pérez",
    email: "ana@ejemplo.com",
    phone: "+57 315 777 8899",
    city: "Cali",
    department: "Valle del Cauca",
    items: [{ product: products[2], quantity: 5 }],
    total: 119000,
    status: "preparing",
    createdAt: "2026-07-06T09:15:00",
  },
  {
    id: "ORD-2026-004",
    customerName: "Diego Martínez",
    email: "diego@ejemplo.com",
    phone: "+57 300 222 3344",
    city: "Cartagena",
    department: "Bolívar",
    items: [{ product: products[3], quantity: 4 }],
    total: 85680,
    status: "shipped",
    createdAt: "2026-07-05T14:20:00",
  },
  {
    id: "ORD-2026-005",
    customerName: "Laura Herrera",
    email: "laura@ejemplo.com",
    phone: "+57 318 555 6677",
    city: "Bucaramanga",
    department: "Santander",
    items: [{ product: products[1], quantity: 2 }, { product: products[2], quantity: 2 }],
    total: 102080,
    status: "delivered",
    createdAt: "2026-07-01T11:00:00",
  },
];

export const timelineEvents = [
  { year: "2015", title: "Aquí irá el inicio", description: "Aquí irá la historia del origen de la empresa en las tierras cafeteras." },
  { year: "2018", title: "Primera fábrica", description: "Aquí irá el momento en que abrieron su primera planta de transformación." },
  { year: "2021", title: "Envíos nacionales", description: "Aquí irá cómo comenzaron a enviar chocolate a todo Colombia." },
  { year: "2024", title: "Experiencia turística", description: "Aquí irá el lanzamiento del pasadía en la fábrica de cacao." },
  { year: "2026", title: "Tienda virtual", description: "Aquí irá el lanzamiento de la tienda online premium." },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1606312619070-d48b4cbc6b3f?w=600&q=80",
  "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
  "https://images.unsplash.com/photo-1511381939415-e44015466834?w=600&q=80",
  "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600&q=80",
  "https://images.unsplash.com/photo-1481391319762-47dff72954d8?w=600&q=80",
  "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80",
];
