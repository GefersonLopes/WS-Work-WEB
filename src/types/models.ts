export interface Brand {
  id: number;
  name: string;
}

export interface Model {
  id: number;
  brand: Brand;
}

export interface ModelsResponse {
  total: number;
  page: number;
  limit: number;
  items: Model[];
}
