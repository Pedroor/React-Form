import { useFormContext } from "react-hook-form";
import {
  RegisterFormData,
  StepProps,
} from "../../../../types/registerForm.types";
import { EmailField } from "./components/EmailField";
import { UserTypeField } from "./components/UserTypeField";

export default function Step1({ onNext }: StepProps) {
  const { handleSubmit, watch } = useFormContext();

  const submitStep1 = (data: Partial<RegisterFormData>) => {
    onNext(data as RegisterFormData);
  };

  console.log(watch());
  return (
    <>
      <form onSubmit={handleSubmit(submitStep1)}>
        <h2 className="text-lg font-bold">Seja bem vindo(a)</h2>
        <EmailField />
        <UserTypeField />
        <button
          type="submit"
          className="w-full h-10 bg-orange-400 text-white py-1 px-3 rounded mt-4"
        >
          Continuar
        </button>
      </form>
    </>
  );
}
