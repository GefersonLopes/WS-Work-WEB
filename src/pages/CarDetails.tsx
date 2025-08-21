import { useParams } from "react-router-dom";

import AsyncFallback from "../components/layout/AsyncFallback";
import Image from "../components/ui/Img";
import { useCar } from "../hooks/useCar";
import features from "../utils/data/featuresCars";
import { currency } from "../utils/generics/formatMoneyBr";
import { getModelImage } from "../utils/generics/modelImage";

function CarDetails() {
  const { id } = useParams<{ id: string }>();

  const { data: car, isLoading, isError } = useCar(id);

  return (
    <AsyncFallback
      isLoading={isLoading}
      isError={isError || !car}
      isLength={car !== undefined}
      errorContent="Erro ao carregar anuncios"
    >
      <article className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="grid gap-8 lg:grid-cols-2 lg:items-center lg:py-8">
          <div>
            <p className="tracking-[0.3em] text-xs font-semibold text-gray-400 uppercase">
              {car?.model?.brand?.name}
            </p>
            <h1 className="mt-1 text-3xl sm:text-4xl font-extrabold text-gray-900">
              {car?.model?.nome}
            </h1>

            <p className="mt-6 text-sm text-gray-500">
              <span className="block">
                <span className="text-gray-400">Ano</span>
                <br />
                <strong className="text-gray-900">{car?.ano}</strong>
              </span>
            </p>

            <p className="mt-6">
              <span className="block text-gray-400">R$</span>
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                {currency
                  .format(car?.model?.fipeValue || 0)
                  .replace("R$", "")
                  .trim()}
              </span>
            </p>

            <div className="mt-6">
              <button
                type="button"
                onClick={() => alert("Obrigado por clicar ;)")}
                className="inline-flex items-center rounded-full bg-gray-900 px-5 py-3 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                Entrar em contato
              </button>
            </div>
          </div>

          <figure className="mx-auto w-full">
            <Image
              src={getModelImage(car?.model?.nome || "")}
              alt={car?.model?.nome || ""}
              className="w-full h-full object-contain"
              loading="eager"
              decoding="async"
            />
          </figure>
        </header>

        <section
          aria-labelledby="ficha-tecnica-title"
          className="mt-10 sm:mt-14"
        >
          <h2
            id="ficha-tecnica-title"
            className="text-2xl font-extrabold text-gray-900"
          >
            Ficha técnica
          </h2>

          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 sm:p-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {car &&
                features(car).map(({ label, value }) => (
                  <div key={label}>
                    <dt className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm sm:text-base font-extrabold text-gray-900">
                      {value}
                    </dd>
                  </div>
                ))}
            </dl>
          </div>
        </section>
      </article>
    </AsyncFallback>
  );
}

export default CarDetails;
