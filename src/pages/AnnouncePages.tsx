import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { z } from "zod";

import AsyncFallback from "../components/layout/AsyncFallback";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import CustomSelect from "../components/ui/Select";
import { useCreateCar } from "../hooks/useCar";
import { useModels } from "../hooks/useModels";
import { CarFormSchema } from "../schemas/createCars";
import type { PostCar } from "../types/cars";

type Opt<T extends string | number> = { value: T; label: string };
type FormValues = z.infer<typeof CarFormSchema>;

const combustivelOpts: Opt<PostCar["combustivel"]>[] = [
  "GASOLINA",
  "ETANOL",
  "DIESEL",
  "HIBRIDO",
  "ELETRICO",
].map((v) => ({ value: v as PostCar["combustivel"], label: v }));

const portasOpts: Opt<PostCar["num_portas"]>[] = [2, 3, 4, 5].map((v) => ({
  value: v as PostCar["num_portas"],
  label: String(v),
}));

const corOpts: Opt<PostCar["cor"]>[] = [
  "BRANCO",
  "PRETO",
  "PRATA",
  "CINZA",
  "AZUL",
  "VERMELHO",
  "OUTRA",
].map((v) => ({ value: v as PostCar["cor"], label: v }));

export default function AnnouncePages() {
  const { data: models, isLoading: loadingModels } = useModels();
  const { mutateAsync, isPending, isError, isSuccess } = useCreateCar();
  const navigate = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(CarFormSchema),
  });

  const modelOpts = (models?.items || []).map((m) => ({
    value: m.id,
    label: m.nome,
  }));

  const onSubmit = async (v: FormValues) => {
    if (!v.modelo_id || !v.combustivel || !v.num_portas || !v.cor || !v.ano)
      return;

    const payload: PostCar = {
      modelo_id: v.modelo_id.value,
      ano: Number(v.ano),
      combustivel: v.combustivel.value as PostCar["combustivel"],
      num_portas: v.num_portas.value,
      cor: v.cor.value,
    };

    mutateAsync(payload)
      .then(() => {
        toast.success("Carro cadastrado com sucesso!");
        reset();
        navigate("/cars");
      })
      .catch(() => {
        toast.error("Erro ao cadastrar carro.");
        reset();
        navigate("/cars");
      });
  };

  return (
    <AsyncFallback
      isLoading={isPending || loadingModels || isSuccess}
      isError={isError}
      errorContent="Erro ao cadastrar carro"
    >
      <main className="mx-auto max-w-3xl p-4 sm:p-6">
        <h1 className="text-2xl font-bold mb-6">Cadastrar carro</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
          <CustomSelect
            name="modelo_id"
            placeholder="Selecione um modelo"
            control={control}
            modelOpts={modelOpts}
            loadingModels={loadingModels}
            error={errors.modelo_id?.message}
          />

          <Input
            type="number"
            inputMode="numeric"
            min={1900}
            max={2100}
            className="!w-full"
            placeholder="2025"
            label="Ano"
            error={errors.ano?.message}
            {...register("ano", { valueAsNumber: true })}
          />

          <CustomSelect
            name="combustivel"
            placeholder="Selecione o combustível"
            control={control}
            modelOpts={combustivelOpts}
            loadingModels={false}
            error={errors.combustivel?.message}
          />

          <CustomSelect
            name="num_portas"
            placeholder="Selecione o nº de portas"
            control={control}
            modelOpts={portasOpts}
            loadingModels={false}
            error={errors.num_portas?.message}
          />

          <CustomSelect
            name="cor"
            placeholder="Selecione a cor"
            control={control}
            modelOpts={corOpts}
            loadingModels={false}
            error={errors.cor?.message}
          />

          <div className="pt-2">
            <Button
              type="submit"
              className="w-full flex items-center justify-center px-4 py-2 disabled:opacity-60 cursor-pointer"
            >
              Salvar
            </Button>
          </div>
        </form>
      </main>
    </AsyncFallback>
  );
}
