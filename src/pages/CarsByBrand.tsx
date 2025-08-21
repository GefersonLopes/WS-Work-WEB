import AsyncFallback from "../components/layout/AsyncFallback";
import CarsListByBrand from "../components/layout/CarsListByBrand";
import Title from "../components/layout/Title";
import { useInfiniteCars } from "../hooks/useInfiniteCars";

function CarsByBrand() {
  const { data, isLoading, isError } = useInfiniteCars({ limit: 1000 });

  const cars = data?.pages.flatMap((page) => page.cars) ?? [];

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Title title="Nossos carros por marca" className="!text-xl !mb-12" />

      <AsyncFallback
        isLoading={isLoading}
        isError={isError || !cars}
        isLength={cars.length > 0}
        errorContent="Erro ao carregar carros"
      >
        <CarsListByBrand items={cars} />
      </AsyncFallback>
    </section>
  );
}

export default CarsByBrand;
