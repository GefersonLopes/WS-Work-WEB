import { useInfiniteCars } from "../../../hooks/useInfinitePosts";
import { getModelImage } from "../../../utils/generics/modelImage";
import AsyncFallback from "../AsyncFallback";
import MediasCard from "../MediaCard";

export default function AnnounceSection() {
  const { data, isLoading, isError } = useInfiniteCars({ limit: 3 });

  const carsModels =
    data?.pages[0].cars.map((car) => ({
      id: car.id,
      name: car.nome_modelo,
      image: getModelImage(car.nome_modelo),
    })) || [];

  return (
    <AsyncFallback
      isLoading={isLoading}
      isError={isError || !carsModels}
      isLength={carsModels.length > 0}
      errorContent="Erro ao carregar anuncios"
    >
      <MediasCard items={carsModels} path="/cars" title="Últimos anunciados" />
    </AsyncFallback>
  );
}
