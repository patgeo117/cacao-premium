/**
 * API client placeholder — replace mock data with NestJS endpoints.
 *
 * Future endpoints:
 * - GET    /products
 * - POST   /orders
 * - POST   /payments/wompi
 * - POST   /payments/mercado-pago
 * - GET    /admin/dashboard
 * - PATCH  /admin/products/:id
 */
export const apiClient = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001/api",

  async get<T>(_path: string): Promise<T> {
    throw new Error("API not connected — using mock data");
  },

  async post<T>(_path: string, _body: unknown): Promise<T> {
    throw new Error("API not connected — using mock data");
  },

  async patch<T>(_path: string, _body: unknown): Promise<T> {
    throw new Error("API not connected — using mock data");
  },

  async delete<T>(_path: string): Promise<T> {
    throw new Error("API not connected — using mock data");
  },
};
