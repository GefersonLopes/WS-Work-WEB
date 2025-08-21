import { z } from "zod";

z.setErrorMap((issue, ctx) => {
  const t = issue.code;
  if (t === "invalid_type") {
    if (issue.received === "undefined")
      return { message: "Campo obrigatório." };
    return { message: "Tipo inválido." };
  }
  if (t === "too_small") return { message: "Valor muito pequeno." };
  if (t === "too_big") return { message: "Valor muito grande." };
  return { message: ctx.defaultError };
});

export const combustiveis = [
  "GASOLINA",
  "ETANOL",
  "DIESEL",
  "HIBRIDO",
  "ELETRICO",
] as const;
export const cores = [
  "BRANCO",
  "PRETO",
  "PRATA",
  "CINZA",
  "AZUL",
  "VERMELHO",
  "OUTRA",
] as const;
export const portas = [2, 3, 4, 5] as const;

const optNum = z.object({ value: z.number(), label: z.string() });
const optStr = z.object({ value: z.string(), label: z.string() });

export const CarFormSchema = z.object({
  modelo_id: optNum
    .nullish()
    .refine(Boolean, { message: "Selecione um modelo." }),

  ano: z.coerce
    .number({
      required_error: "Preencha o ano.",
      invalid_type_error: "Informe um ano válido.",
    })
    .int({ message: "Ano precisa ser inteiro." })
    .gte(1900, { message: "Ano mínimo: 1900." })
    .lte(2100, { message: "Ano máximo: 2100." }),

  combustivel: optStr
    .nullish()
    .refine(Boolean, { message: "Selecione o combustível." })
    .refine(
      (o) => !o || (combustiveis as readonly string[]).includes(o.value),
      { message: "Combustível inválido." },
    ),

  num_portas: optNum
    .nullish()
    .refine(Boolean, { message: "Selecione o nº de portas." })
    .refine((o) => !o || (portas as readonly number[]).includes(o.value), {
      message: "Quantidade de portas inválida.",
    }),

  cor: optStr
    .nullish()
    .refine(Boolean, { message: "Selecione a cor." })
    .refine((o) => !o || (cores as readonly string[]).includes(o.value), {
      message: "Cor inválida.",
    }),
});

export type CarFormValues = z.infer<typeof CarFormSchema>;
