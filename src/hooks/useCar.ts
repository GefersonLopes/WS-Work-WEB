import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import api from "../api/client";
import type { GetCar, PostCar } from "../types/cars";

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

export function useCreateCar() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (body: PostCar) => {
      const { data } = await api.post<GetCar>("/cars", body);
      return data;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["cars"] });
    },
  });
}
