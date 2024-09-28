import { useFormContext } from "react-hook-form";
import {
  RegisterFormData,
  StepProps,
  UserType,
} from "../../../../types/registerForm.types";
import { BusinessFields } from "../Step2/components/BusinessFields";
import { PersonFields } from "../Step2/components/PersonFields";
import { UserForm } from "../..";
import { PasswordField } from "../Step3/components/PasswordField";
import { EmailField } from "../Step1/components/EmailField";

export default function Step4({ goBack, onNext, userType }: StepProps) {
  const { handleSubmit } = useFormContext();

  const submitStep4 = (data: Partial<RegisterFormData>) => {
    onNext(data as RegisterFormData);
  };
  const getFields = () => {
    if (userType === UserType.BUSINESS) {
      return <BusinessFields withTitle={false} />;
    } else {
      return <PersonFields withTitle={false} />;
    }
  };

  return (
    <form onSubmit={handleSubmit(submitStep4)}>
      <h2 className="text-lg font-bold">Revise suas informações</h2>
      <EmailField />
      {getFields()}
      <PasswordField />
      <UserForm.Footer goBack={goBack} submitButtonLabel="Cadastrar" />
    </form>
  );
}
