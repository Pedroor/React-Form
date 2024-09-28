import { useFormContext } from "react-hook-form";
import {
  RegisterFormData,
  StepProps,
  UserType,
} from "../../types/registerForm.types";
import { Step2 } from "./Step2";
import { UserForm } from ".";
import { Form } from "../Form";

export function Step4({ goBack, onNext, userType }: StepProps) {
  const { handleSubmit } = useFormContext();

  const submitStep4 = (data: Partial<RegisterFormData>) => {
    onNext(data as RegisterFormData);
  };
  const getFields = () => {
    if (userType === UserType.BUSINESS) {
      return <Step2.BusinessFields withTitle={false} />;
    } else {
      return <Step2.PersonFields withTitle={false} />;
    }
  };

  return (
    <form onSubmit={handleSubmit(submitStep4)}>
      <h2 className="text-lg font-bold">Revise suas informações</h2>
      <Form.Field>
        <Form.Label htmlFor="email" className="block font-medium text-sm">
          Endereço de e-mail
        </Form.Label>
        <Form.Input name="email" placeholder="Digite seu e-mail" type="email" />
        <Form.ErrorMessage field="email" />
      </Form.Field>
      {getFields()}
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
