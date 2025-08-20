import { lazy, Suspense } from "react";

import type { Car } from "../../../types/cars";
import { getModelImage } from "../../../utils/generics/modelImage";
import { List } from "../../ui/List";
import Spinner from "../../ui/Spinner";

const CarCard = lazy(() => import("../CarCard"));

export default function CarsList({ items }: { items: Car[] }) {
  return (
    <List
      items={items}
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
            to={`/carros/${car.id}`}
            className="w-full max-w-[680px]"
          />
        </Suspense>
      )}
    </List>
  );
}
