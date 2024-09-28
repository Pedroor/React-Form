import { useFormContext } from "react-hook-form";
import {
  RegisterFormData,
  StepProps,
  UserType,
} from "../../../../types/registerForm.types";
import { UserForm } from "../..";
import { BusinessFields } from "./components/BusinessFields";
import { PersonFields } from "./components/PersonFields";

export default function Step2({ goBack, onNext, userType }: StepProps) {
  const { handleSubmit } = useFormContext();

  const submitStep2 = (data: Partial<RegisterFormData>) => {
    onNext(data as RegisterFormData);
  };
  const getFields = () => {
    if (userType === UserType.BUSINESS) {
      return <BusinessFields />;
    } else {
      return <PersonFields />;
    }
  };

  return (
    <form onSubmit={handleSubmit(submitStep2)}>
      {getFields()}
      <UserForm.Footer goBack={goBack} />
    </form>
  );
}
