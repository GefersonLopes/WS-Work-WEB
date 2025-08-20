import type { Brand } from "./brands";

export interface Model {
  id: number;
  brand: Brand;
  brandId: number;
  nome: string;
  fipeValue: number;
}

export interface ModelsResponse {
  total: number;
  page: number;
  limit: number;
  items: Model[];
}
