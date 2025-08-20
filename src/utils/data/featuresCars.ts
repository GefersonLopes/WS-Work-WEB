import type { GetCar } from "../../types/cars";
import { formatDateTimeWithRelative } from "../generics/formatDate";
import { currency } from "../generics/formatMoneyBr";

const features = (car: GetCar) => [
  {
    label: "Combustível",
    value: car?.combustivel,
  },
  {
    label: "Portas",
    value: car?.num_portas,
  },
  {
    label: "Cor",
    value: car?.cor,
  },
  {
    label: "Marca",
    value: car?.model?.brand?.name,
  },
  {
    label: "Modelo",
    value: car?.model?.nome,
  },
  {
    label: "Postado em",
    value: formatDateTimeWithRelative(car?.createdAt || ""),
  },
  {
    label: "Ano",
    value: car?.ano,
  },
  {
    label: "Valor",
    value:
      "R$ " +
      currency
        .format(car?.model?.fipeValue || 0)
        .replace("R$", "")
        .trim(),
  },
  {
    label: "Vendidos (fake)",
    value: Math.floor(Math.random() * 100) + 1,
  },
];

export default features;
