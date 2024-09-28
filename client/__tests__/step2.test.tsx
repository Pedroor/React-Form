import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  businessUserBaseSchema,
  personUserBaseSchema,
} from "../src/schemas/registerFormSchema";
import { UserType } from "../src/types/registerForm.types";
import Step2 from "../src/components/UserForm/Steps/Step2";

const WrapperBusinessUser = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm({
    resolver: zodResolver(businessUserBaseSchema),
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
};
const WrapperPersonUser = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm({
    resolver: zodResolver(personUserBaseSchema),
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe("Step 2 User Type Business", () => {
  it("should display validation errors when business form fields are missing by Step 2 User Type Bussiness", async () => {
    const handleSubmit = vi.fn();
    render(
      <WrapperBusinessUser>
        <Step2 onNext={handleSubmit} userType={UserType.BUSINESS} />
      </WrapperBusinessUser>
    );

    const submitButton = screen.getByText("Continuar");
    fireEvent.click(submitButton);

    expect(
      await screen.findByText("A razão social é obrigatória")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("O CNPJ deve ter no mínimo 14 caracteres")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("A data de abertura é obrigatória")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("O número de telefone é obrigatório")
    ).toBeInTheDocument();
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("should submit the form for business when valid data is provided by Step 2 User Type Bussiness", async () => {
    const handleSubmit = vi.fn();
    render(
      <WrapperBusinessUser>
        <Step2 onNext={handleSubmit} userType={UserType.BUSINESS} />
      </WrapperBusinessUser>
    );

    fireEvent.change(screen.getByLabelText(/Razão Social/i), {
      target: { value: "Minha Empresa S/A" },
    });

    fireEvent.change(screen.getByLabelText(/CNPJ/i), {
      target: { value: "12345678000195" },
    });

    fireEvent.change(screen.getByLabelText(/Data de Abertura/i), {
      target: { value: "2010-07-01" },
    });

    fireEvent.change(screen.getByLabelText(/Telefone/i), {
      target: { value: "85999999999" },
    });

    const submitButton = screen.getByText("Continuar");
    fireEvent.click(submitButton);
  });
});

describe("Step 2 Form - Person", () => {
  it("should display validation errors when person form fields are missing by Step 2 User Type Person", async () => {
    const handleSubmit = vi.fn();
    render(
      <WrapperPersonUser>
        <Step2 onNext={handleSubmit} />
      </WrapperPersonUser>
    );

    const submitButton = screen.getByText("Continuar");
    fireEvent.click(submitButton);

    expect(
      await screen.findByText("O nome completo é obrigatório")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("O CPF deve ter no mínimo 11 caracteres")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("A data de nascimento é obrigatória")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("O número de telefone é obrigatório")
    ).toBeInTheDocument();
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("should submit the form for person when valid data is provided by Step 2 User Type Person ", async () => {
    const handleSubmit = vi.fn();
    render(
      <WrapperPersonUser>
        <Step2 onNext={handleSubmit} />
      </WrapperPersonUser>
    );

    fireEvent.change(screen.getByLabelText(/Nome/i), {
      target: { value: "João Silva" },
    });

    fireEvent.change(screen.getByLabelText(/CPF/i), {
      target: { value: "12345678909" },
    });

    fireEvent.change(screen.getByLabelText(/Data de nascimento/i), {
      target: { value: "1990-05-25" },
    });

    fireEvent.change(screen.getByLabelText(/Telefone/i), {
      target: { value: "85999999999" },
    });

    const submitButton = screen.getByText("Continuar");
    fireEvent.click(submitButton);
  });
});
