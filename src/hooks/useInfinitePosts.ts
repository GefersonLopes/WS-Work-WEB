import { useInfiniteQuery } from "@tanstack/react-query";

import api from "../api/client";
import type { CarsResponse } from "../types/cars";

export function useInfiniteCars({
  limit = 9,
  search,
}: {
  limit?: number;
  search?: string;
}) {
  return useInfiniteQuery({
    queryKey: ["cars", limit, search],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await api.get<CarsResponse>("/cars", {
        params: {
          limit,
          page: pageParam,
          search,
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
