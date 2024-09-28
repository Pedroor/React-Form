import { useFormContext } from "react-hook-form";
import {
  RegisterFormData,
  StepProps,
  UserType,
} from "../../../types/registerForm.types";
import { UserForm } from "..";
import { Step2 } from ".";

export function Step({ goBack, onNext, userType }: StepProps) {
  const { handleSubmit } = useFormContext();
  const title =
    userType === UserType.BUSINESS ? "Pessoa Jurídica" : "Pessoa Física";
  console.log(title);

  const submitStep2 = (data: Partial<RegisterFormData>) => {
    console.log("OI");
    console.log("DATA", data);
    onNext(data as RegisterFormData);
  };
  return (
    <form onSubmit={handleSubmit(submitStep2)}>
      <Step2.BusinessFields />
      <UserForm.Footer goBack={goBack} />
    </form>
  );
}
