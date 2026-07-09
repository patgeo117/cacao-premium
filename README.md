# Cacao Premium — Prototipo Tienda Virtual

Prototipo visual **100% frontend** para demostrar al cliente cómo sería su tienda de chocolate artesanal. Desarrollado por **Trip Digital**.

> **Objetivo:** Mostrar un producto terminado y profesional. Solo falta conectar backend (NestJS + PostgreSQL + Prisma) para pasar a producción.

## Demo en vivo

**https://cacao-premium.vercel.app**

| Recurso | URL |
|---|---|
| Tienda | https://cacao-premium.vercel.app |
| Panel Admin | https://cacao-premium.vercel.app/admin |
| Checkout | https://cacao-premium.vercel.app/checkout |
| GitHub | https://github.com/patgeo117/cacao-premium |

## Stack tecnológico

| Tecnología | Uso |
|---|---|
| Next.js 16 (App Router) | Framework React |
| TypeScript | Tipado estático |
| Tailwind CSS v4 | Estilos |
| shadcn/ui | Componentes UI |
| Framer Motion | Animaciones |
| Lucide Icons | Iconografía |
| Zod + React Hook Form | Preparado para validaciones |

## Qué incluye el prototipo

### Tienda (cliente)
- **Hero** con animaciones y CTAs
- **Historia** — misión, visión, valores
- **Catálogo** — 5 productos con % cacao, precios, descuentos y stock
- **Experiencia** — pasadía en fábrica de cacao (~$80.000 COP)
- **Carrito** — sidebar con agregar, eliminar, cantidades, IVA y total
- **Checkout** — formulario visual + simulación de pasarela de pago
- **Nosotros** — timeline y galería
- **Contacto** — formulario y mapa placeholder

### Panel administrativo (demo sin login)
- Dashboard con métricas simuladas
- Tabla de productos con CRUD local (modales)
- Gestión de pedidos con estados

## Qué NO incluye (por diseño)

- Base de datos
- Backend / APIs
- Autenticación real
- Pasarela de pagos (Wompi / Mercado Pago)
- Persistencia de datos

Todo usa **mock data** en `src/mock/data.ts`.

## Arquitectura preparada para producción

```
src/
├── app/              # Rutas (App Router)
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Secciones de página
│   ├── features/     # Carrito, checkout, admin
│   └── ui/           # shadcn/ui
├── hooks/            # useCart (Context)
├── lib/
│   ├── api/          # Cliente API placeholder → NestJS
│   ├── config/       # Variables de entorno
│   ├── security/     # JWT, roles (preparado)
│   └── validations/  # Schemas Zod
├── mock/             # Datos simulados → reemplazar por API
└── types/            # Interfaces TypeScript
```

### Integraciones futuras preparadas
- **NestJS** — API REST
- **PostgreSQL + Prisma** — Base de datos
- **JWT** — Autenticación y roles
- **Wompi / Mercado Pago** — Pagos
- **Cloudinary** — Imágenes
- **Resend** — Emails transaccionales
- **Cloudflare** — CDN y seguridad

## Productos simulados

| Producto | Cacao | Precio |
|---|---|---|
| Chocolatina Cacao 99% | 99% | $28.000 |
| Chocolatina Cacao 70% | 70% | $24.000 |
| Chocolatina Cacao 55% | 55% | $20.000 |
| Chocolatina Cacao 36% | 36% | $18.000 |
| Chocolate para Batir | 70% | $22.000 |

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env.local

# Servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

## Scripts

```bash
npm run dev      # Desarrollo
npm run build    # Build producción
npm run start    # Servidor producción
npm run lint     # ESLint
```

## Rutas

| Ruta | Descripción |
|---|---|
| `/` | Página principal |
| `/checkout` | Proceso de compra |
| `/nosotros` | Historia y galería |
| `/contacto` | Formulario de contacto |
| `/admin` | Panel administrativo |
| `/admin/pedidos` | Gestión de pedidos |

## Paleta de diseño

- Chocolate oscuro `#3D2314`
- Crema `#F5F0E8`
- Beige `#E8DCC8`
- Verde cacao `#4A5D3A`
- Dorado sutil `#C4A35A`

## Evolución a producción

1. Reemplazar `src/mock/data.ts` por llamadas a `src/lib/api/client.ts`
2. Implementar backend NestJS con Prisma + PostgreSQL
3. Conectar Wompi o Mercado Pago en checkout
4. Activar middleware JWT para `/admin`
5. Subir imágenes a Cloudinary
6. Configurar dominio propio y variables de entorno

## Licencia

Proyecto privado — Trip Digital © 2026
