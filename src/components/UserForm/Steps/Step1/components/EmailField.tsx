import { Form } from "../../../../Form";

export function EmailField() {
  return (
    <Form.Field>
      <Form.Label htmlFor="email" className="block font-medium text-sm">
        Endereço de e-mail
      </Form.Label>
      <Form.Input name="email" placeholder="Digite seu e-mail" type="email" />
      <Form.ErrorMessage field="email" />
    </Form.Field>
  );
}
