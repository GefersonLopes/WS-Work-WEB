import { useState } from "react";
import { useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";
import { useSearchParams } from "react-router-dom";

import AsyncFallback from "../components/layout/AsyncFallback";
import CarsList from "../components/layout/CarsList";
import Title from "../components/layout/Title";
import Button from "../components/ui/Button";
import SearchInput from "../components/ui/SearchInput";
import Spinner from "../components/ui/Spinner";
import { useInfiniteCars } from "../hooks/useInfinitePosts";

type FormValues = {
  search: string;
};

function CarsPages() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");

  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: { search: "" },
  });

  const [searchTerm, setSearchTerm] = useState(searchQuery || "");

  const onSubmit = (values: FormValues) => {
    setSearchTerm(values.search.trim());
  };

  const handleClear = () => setSearchTerm("");

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteCars({ limit: 9, search: searchTerm });

  const cars = data?.pages.flatMap((page) => page.cars) ?? [];

  console.log(cars);

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Title title="Nossos carros" className="!text-xl !mb-12" />
      <form
        className="flex flex-col md:flex-row items-center gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <SearchInput
          placeholder="Qual carro você está buscando? (Modelo, marca, ano, etc)"
          className="flex-1 min-w-0 py-2 w-full"
          onClear={handleClear}
          {...register("search")}
        />
        <Button
          type="submit"
          className="w-full md:w-1/3 py-2 flex items-center justify-center gap-2"
        >
          <CiSearch size={20} aria-hidden="true" />
          Pesquisar
        </Button>
      </form>
      <AsyncFallback
        isLoading={isLoading}
        isError={isError || !cars}
        isLength={cars.length > 0}
        errorContent="Erro ao carregar anuncios"
      >
        <main>
          <CarsList items={cars} />
          {hasNextPage && (
            <div className="mt-8 w-full flex items-center justify-center">
              <Button
                type="button"
                className="!bg-transparent border border-primary !text-secondary py-2 px-5 rounded-none cursor-pointer min-w-40 min-h-10 flex items-center justify-center"
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
              >
                {isFetchingNextPage ? <Spinner /> : "Carregar mais..."}
              </Button>
            </div>
          )}
        </main>
      </AsyncFallback>
    </section>
  );
}

export default CarsPages;
