import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Step1 from "../src/components/UserForm/Steps/Step1";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema } from "../src/schemas/registerFormSchema";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm({
    resolver: zodResolver(step1Schema), // Use resolver to apply validation
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe("Step 1 Form", () => {
  it("should display validation errors when email or user type is missing", async () => {
    const handleSubmit = vi.fn();
    render(
      <Wrapper>
        <Step1 onNext={handleSubmit} />
      </Wrapper>
    );

    const submitButton = screen.getByText("Continuar");
    fireEvent.click(submitButton);

    expect(
      await screen.findByText("O e-mail é obrigatório")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Selecione um tipo de usuário")
    ).toBeInTheDocument();
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("should submit the form when valid data is provided", async () => {
    const handleSubmit = vi.fn();
    render(
      <Wrapper>
        <Step1 onNext={handleSubmit} />
      </Wrapper>
    );

    fireEvent.change(screen.getByLabelText(/Endereço de e-mail/i), {
      target: { value: "test@example.com" },
    });

    fireEvent.click(screen.getByLabelText(/Pessoa física/i));

    const submitButton = screen.getByText("Continuar");
    fireEvent.click(submitButton);
  });
});
