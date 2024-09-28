import { useFormContext } from "react-hook-form";
import { RegisterFormData, StepProps } from "../../types/registerForm.types";
import { UserForm } from ".";
import { Form } from "../Form";

export function Step3({ goBack, onNext }: StepProps) {
  const { handleSubmit } = useFormContext();

  const submitStep3 = (data: Partial<RegisterFormData>) => {
    onNext(data as RegisterFormData);
  };

  return (
    <form onSubmit={handleSubmit(submitStep3)}>
      <h2 className="text-lg font-bold">Senha de acesso</h2>
      <Form.Field>
        <Form.Label className="flex flex-col font-medium text-sm">
          Sua senha
          <Form.Input
            name="password"
            placeholder="Digite a sua senha"
            type="text"
          />
        </Form.Label>
        <Form.ErrorMessage field="password" />
      </Form.Field>
      <UserForm.Footer goBack={goBack} />
    </form>
  );
}
