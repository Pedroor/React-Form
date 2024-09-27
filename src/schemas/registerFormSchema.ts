import { z } from "zod";

const registerFormSchema = z
  .object({
    email: z
      .string()
      .min(1, {
        message: "O e-mail é obrigatório",
      })
      .email({
        message: "Formato de e-mail inválido",
      })
      .toLowerCase(),

    userType: z.enum(["Individual", "Business"], {
      errorMap: () => ({
        message: "Selecione uma opção válida: Pessoa Física ou Pessoa Jurídica",
      }),
    }),

    fullName: z
      .string()
      .min(1, {
        message: "O nome completo é obrigatório",
      })
      .transform((name) => {
        return name
          .trim()
          .split(" ")
          .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
          .join(" ");
      }),

    cpf: z
      .string()
      .min(11, {
        message: "O CPF deve ter no mínimo 11 caracteres",
      })
      .max(14, {
        message: "O CPF deve ter no máximo 14 caracteres",
      }),

    birthDate: z
      .string()
      .min(1, {
        message: "A data de nascimento é obrigatória",
      })
      .refine(
        (date) => {
          const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/; // Exemplo: DD/MM/AAAA
          return dateRegex.test(date);
        },
        {
          message: "Formato de data inválido. Use DD/MM/AAAA",
        }
      ),

    phoneNumber: z
      .string()
      .min(1, {
        message: "O número de telefone é obrigatório",
      })
      .min(10, {
        message: "O número de telefone deve ter no mínimo 10 caracteres",
      }),

    companyName: z.string().min(1, {
      message: "A razão social é obrigatória",
    }),

    cnpj: z
      .string()
      .min(14, {
        message: "O CNPJ deve ter no mínimo 14 caracteres",
      })
      .max(18, {
        message: "O CNPJ deve ter no máximo 18 caracteres",
      }),

    openingDate: z
      .string()
      .min(1, {
        message: "A data de abertura é obrigatória",
      })
      .refine(
        (date) => {
          const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/; // Exemplo: DD/MM/AAAA
          return dateRegex.test(date);
        },
        {
          message: "Formato de data inválido. Use DD/MM/AAAA",
        }
      ),

    password: z
      .string()
      .min(1, {
        message: "A senha é obrigatória",
      })
      .min(6, {
        message: "A senha deve ter no mínimo 6 caracteres",
      }),

    confirmPassword: z.string().min(1, {
      message: "A confirmação da senha é obrigatória",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas devem coincidir",
  });

export default registerFormSchema;
