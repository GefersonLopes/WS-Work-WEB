export interface Car {
  id: number;
  timestamp_cadastro: string;
  modelo_id: number;
  ano: number;
  combustivel: string;
  num_portas: number;
  cor: string;
  nome_modelo: string;
  valor: number;
}

export interface CarsResponse {
  total: number;
  page: number;
  limit: number;
  cars: Car[];
}

export interface Page {
  currentPage: number;
  totalPages: number;
  cars: Car[];
}
