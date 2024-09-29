import { describe, it, expect } from "vitest";
import {
  businessUserBaseSchema,
  personUserBaseSchema,
  step1Schema,
  step3Schema,
} from "../src/schemas/userFormSchema";
import { UserType } from "../src/types/registerForm.types";

describe("Step 1 Validation Schema", () => {
  it("should pass with valid email and user type", () => {
    const validData = {
      email: "test@example.com",
      userType: UserType.PERSON,
    };
    const result = step1Schema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("should fail with invalid email", () => {
    const invalidData = {
      email: "invalid-email",
      userType: "Pessoa física",
    };
    const result = step1Schema.safeParse(invalidData);
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("Formato de e-mail inválido");
  });

  it("should fail with missing user type", () => {
    const invalidData = {
      email: "test@example.com",
    };
    const result = step1Schema.safeParse(invalidData);
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe(
      "Selecione um tipo de usuário"
    );
  });
});

describe("Step 3 Validation Schema", () => {
  it("should pass with valid password", () => {
    const validData = {
      password: "mypassword",
    };
    const result = step3Schema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("should fail with too short password", () => {
    const invalidData = {
      password: "123",
    };
    const result = step3Schema.safeParse(invalidData);
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe(
      "A senha deve ter no mínimo 6 caracteres"
    );
  });
});

describe("Person User Base Schema", () => {
  it("should pass with valid data", () => {
    const validData = {
      fullName: "Pedro Silva",
      cpf: "123.456.789-09", // assumindo que é um CPF válido
      birthDate: "2000-01-01",
      phoneNumber: "999999999",
    };
    const result = personUserBaseSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("should fail with invalid CPF", () => {
    const invalidData = {
      fullName: "Pedro Silva",
      cpf: "11111111111", // CPF inválido
      birthDate: "2000-01-01",
      phoneNumber: "999999999",
    };
    const result = personUserBaseSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("CPF inválido");
  });
});

describe("Business User Base Schema", () => {
  it("should pass with valid data", () => {
    const validData = {
      companyName: "Empresa Ltda",
      cnpj: "12.345.678/0001-95",
      openingDate: "2010-05-10",
      phoneNumber: "999999999",
    };
    const result = businessUserBaseSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("should fail with invalid CNPJ", () => {
    const invalidData = {
      companyName: "Empresa Ltda",
      cnpj: "11111111111111",
      openingDate: "2010-05-10",
      phoneNumber: "999999999",
    };
    const result = businessUserBaseSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("CNPJ inválido");
  });
});
