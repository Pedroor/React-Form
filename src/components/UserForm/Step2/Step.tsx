import { useFormContext } from "react-hook-form";
import {
  RegisterFormData,
  StepProps,
  UserType,
} from "../../../types/registerForm.types";
import { UserForm } from "..";
import { Step2 } from ".";

export function Step({ goBack, onNext, userType }: StepProps) {
  const { handleSubmit, formState } = useFormContext();

  console.log(formState.errors);

  const submitStep2 = (data: Partial<RegisterFormData>) => {
    onNext(data as RegisterFormData);
  };
  const getFields = () => {
    if (userType === UserType.BUSINESS) {
      return <Step2.BusinessFields />;
    } else {
      return <Step2.PersonFields />;
    }
  };

  return (
    <form onSubmit={handleSubmit(submitStep2)}>
      {getFields()}
      <UserForm.Footer goBack={goBack} />
    </form>
  );
}
