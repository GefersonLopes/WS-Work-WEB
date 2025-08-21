import { lazy, Suspense } from "react";

import type { Car } from "../../../types/cars";
import { getModelImage } from "../../../utils/generics/modelImage";
import { List } from "../../ui/List";
import Spinner from "../../ui/Spinner";
import Title from "../Title";

const CarCard = lazy(() => import("../CarCard"));

export default function CarsListByBrand({ items }: { items: Car[] }) {
  const groupedByBrand = items.reduce<Record<string, Car[]>>((acc, car) => {
    if (!acc[car.nome_marca]) {
      acc[car.nome_marca] = [];
    }
    acc[car.nome_marca].push(car);
    return acc;
  }, {});

  return (
    <div className="space-y-10">
      {Object.entries(groupedByBrand).map(([brand, cars]) => (
        <div key={brand}>
          <Title
            title={brand + " (" + cars.length + ")"}
            className="bg-dark text-white rounded-full py-2 px-4 w-[90%] sm:w-[97%] ms-4 text-center"
          />

          <List
            items={cars}
            className="px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 [&>div]:contents"
          >
            {(car) => (
              <Suspense
                fallback={
                  <div className="w-full h-full min-h-[400px] max-w-[680px] flex items-center justify-center">
                    <Spinner />
                  </div>
                }
              >
                <CarCard
                  id={car.id}
                  name={car.nome_modelo}
                  nameBrand={car.nome_marca}
                  year={car.ano}
                  price={car.valor}
                  image={getModelImage(car.nome_modelo)}
                  badge={car.combustivel}
                  to={`/cars/${car.id}`}
                  className="w-full max-w-[680px]"
                />
              </Suspense>
            )}
          </List>
        </div>
      ))}
    </div>
  );
}
