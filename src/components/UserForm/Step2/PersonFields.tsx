import { Form } from "../../Form";

export function PersonFields() {
  return (
    <>
      <h2 className="text-lg font-bold">Pessoa Física</h2>
      <Form.Label className="flex flex-col font-medium text-sm">
        Nome
        <Form.Input name="name" placeholder="Digite o seu nome" type="text" />
      </Form.Label>
      <Form.Label className="flex flex-col font-medium text-sm">
        CPF
        <Form.Input name="cpf" placeholder="Digite o seu CPF" type="text" />
      </Form.Label>
      <Form.Label className="flex flex-col font-medium text-sm">
        Data de nascimento
        <Form.Input name="birthDate" type="date" />
      </Form.Label>
      <Form.Label className="flex flex-col font-medium text-sm">
        Telefone
        <Form.Input
          name="companyName"
          placeholder="Digite o seu telefone"
          type="text"
        />
      </Form.Label>
    </>
  );
}
