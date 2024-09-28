import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step3Schema } from "../src/schemas/registerFormSchema";
import Step3 from "../src/components/UserForm/Steps/Step3";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm({
    resolver: zodResolver(step3Schema),
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe("Step 3 Form", () => {
  it("should display validation errors when email or user type is missing", async () => {
    const handleSubmit = vi.fn();
    render(
      <Wrapper>
        <Step3 onNext={handleSubmit} />
      </Wrapper>
    );

    const submitButton = screen.getByText("Continuar");
    fireEvent.click(submitButton);

    expect(
      await screen.findByText("A senha é obrigatória")
    ).toBeInTheDocument();

    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("should submit the form when valid data is provided", async () => {
    const handleSubmit = vi.fn();
    render(
      <Wrapper>
        <Step3 onNext={handleSubmit} />
      </Wrapper>
    );

    fireEvent.change(screen.getByLabelText(/Sua senha/i), {
      target: { value: "123456" },
    });
    const submitButton = screen.getByText("Continuar");
    fireEvent.click(submitButton);
  });
});
