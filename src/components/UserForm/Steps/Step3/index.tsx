import { useFormContext } from "react-hook-form";
import {
  RegisterFormData,
  StepProps,
} from "../../../../types/registerForm.types";
import { UserForm } from "../..";
import { PasswordField } from "./components/PasswordField";

export default function Step3({ goBack, onNext }: StepProps) {
  const { handleSubmit } = useFormContext();

  const submitStep3 = (data: Partial<RegisterFormData>) => {
    onNext(data as RegisterFormData);
  };

  return (
    <form onSubmit={handleSubmit(submitStep3)}>
      <h2 className="text-lg font-bold">Senha de acesso</h2>
      <PasswordField />
      <UserForm.Footer goBack={goBack} />
    </form>
  );
}
