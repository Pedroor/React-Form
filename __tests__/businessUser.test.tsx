import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Step2 from "../src/components/UserForm/Steps/Step2";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { businessUserBaseSchema } from "../src/schemas/registerFormSchema";
import { UserType } from "../src/types/registerForm.types";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm({
    resolver: zodResolver(businessUserBaseSchema),
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe("Step 2 Form - Business", () => {
  it("should display validation errors when business form fields are missing", async () => {
    const handleSubmit = vi.fn();
    render(
      <Wrapper>
        <Step2 onNext={handleSubmit} userType={UserType.BUSINESS} />
      </Wrapper>
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

  it("should submit the form for business when valid data is provided", async () => {
    const handleSubmit = vi.fn();
    render(
      <Wrapper>
        <Step2 onNext={handleSubmit} userType={UserType.BUSINESS} />
      </Wrapper>
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
