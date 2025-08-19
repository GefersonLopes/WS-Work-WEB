import { useInfiniteQuery } from "@tanstack/react-query";

import api from "../api/client";
import type { CarsResponse } from "../types/cars";

export function useInfiniteCars({ limit }: { limit?: number }) {
  return useInfiniteQuery({
    queryKey: ["cars", limit || 9],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await api.get<CarsResponse>("/cars", {
        params: {
          limit,
          page: pageParam,
        },
      });

      return data as CarsResponse;
    },
    getNextPageParam: (lastPage) => {
      const totalPages = Math.ceil(lastPage.total / lastPage.limit);
      return lastPage.page < totalPages ? lastPage.page + 1 : undefined;
    },
  });
}
