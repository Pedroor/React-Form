import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Step2 from "../src/components/UserForm/Steps/Step2";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personUserBaseSchema } from "../src/schemas/userFormSchema";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm({
    resolver: zodResolver(personUserBaseSchema),
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe("Step 2 Form - Person", () => {
  it("should display validation errors when person form fields are missing", async () => {
    const handleSubmit = vi.fn();
    render(
      <Wrapper>
        <Step2 onNext={handleSubmit} />
      </Wrapper>
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

  it("should submit the form for person when valid data is provided", async () => {
    const handleSubmit = vi.fn();
    render(
      <Wrapper>
        <Step2 onNext={handleSubmit} />
      </Wrapper>
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
