import { z } from "zod";

export const step1Schema = z.object({
  email: z
    .string()
    .email({ message: "Formato de e-mail inválido" })
    .min(1, { message: "O e-mail é obrigatório" }),
  userType: z.enum(["Pessoa Física", "Pessoa Jurídica"], {
    errorMap: () => ({ message: "Selecione um tipo de usuário" }),
  }),
});

export const step3Schema = z.object({
  password: z
    .string()
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres" })
    .min(1, { message: "A senha é obrigatória" }),
});

export const personUserFinalSchema = z.object({
  email: z.string().email({ message: "Formato de e-mail inválido" }),
  fullName: z.string().min(1, { message: "O nome completo é obrigatório" }),
  cpf: z
    .string()
    .min(11, { message: "O CPF deve ter no mínimo 11 caracteres" })
    .max(14, { message: "O CPF deve ter no máximo 14 caracteres" }),
  birthDate: z
    .string()
    .min(1, { message: "A data de nascimento é obrigatória" }),
  phoneNumber: z
    .string()
    .min(1, { message: "O número de telefone é obrigatório" }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
});

export const businessUserFinalSchema = z.object({
  email: z.string().email({ message: "Formato de e-mail inválido" }),
  companyName: z.string().min(1, { message: "A razão social é obrigatória" }),
  cnpj: z
    .string()
    .min(14, { message: "O CNPJ deve ter no mínimo 14 caracteres" })
    .max(18, { message: "O CNPJ deve ter no máximo 18 caracteres" }),
  openingDate: z
    .string()
    .min(1, { message: "A data de abertura é obrigatória" }),
  phoneNumber: z
    .string()
    .min(1, { message: "O número de telefone é obrigatório" }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
});
