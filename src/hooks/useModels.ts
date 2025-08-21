import { useQuery } from "@tanstack/react-query";

import api from "../api/client";
import type { ModelsResponse } from "../types/models";

export function useModels() {
  return useQuery({
    queryKey: ["models"],
    queryFn: async (): Promise<ModelsResponse> => {
      const { data } = await api.get("/models", {
        params: {
          limit: 100,
        },
      });
      return data;
    },
    staleTime: 5 * 60_000,
  });
}
