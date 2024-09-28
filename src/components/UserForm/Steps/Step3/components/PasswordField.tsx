import { Form } from "../../../../Form";

export function PasswordField() {
  return (
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
  );
}
