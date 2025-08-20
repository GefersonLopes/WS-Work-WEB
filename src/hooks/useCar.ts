import { useQuery } from "@tanstack/react-query";

import api from "../api/client";
import type { GetCar } from "../types/cars";

export function useCar(carId?: number | string) {
  return useQuery({
    queryKey: ["car", carId],
    queryFn: async () => {
      const { data } = await api.get<GetCar>(`/cars/${carId}`);
      return data;
    },
    enabled: !!carId,
  });
}
