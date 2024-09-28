import { useFormContext } from "react-hook-form";
import {
  RegisterFormData,
  StepProps,
  UserType,
} from "../../types/registerForm.types";
import { Form } from "../Form";

export function Step1({ onNext }: StepProps) {
  const { handleSubmit } = useFormContext();

  const submitStep1 = (data: Partial<RegisterFormData>) => {
    console.log("OI");
    console.log("DATA", data);
    onNext(data as RegisterFormData);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitStep1)}>
        <h2 className="text-lg font-bold">Seja bem vindo(a)</h2>
        <Form.Label htmlFor="email" className="block font-medium text-sm">
          Endereço de e-mail
        </Form.Label>
        <Form.Input name="email" placeholder="Digite seu e-mail" type="email" />
        <div className="flex items-center gap-2 mt-2">
          <Form.Label className="flex items-center">
            <Form.Radio type="radio" name="userType" value={UserType.PERSON} />
            Pessoa física
          </Form.Label>

          <Form.Label className="flex items-center">
            <Form.Radio name="userType" value={UserType.BUSINESS} />
            Pessoa jurídica
          </Form.Label>
        </div>
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
