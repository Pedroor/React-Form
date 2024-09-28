import { Form } from "../../Form";

export function BusinessFields() {
  return (
    <>
      <h2 className="text-lg font-bold">Pessoa Júridica</h2>
      <Form.Label className="flex flex-col font-medium text-sm">
        Razão Social
        <Form.Input
          name="companyName"
          placeholder="Digite a razão social"
          type="text"
        />
      </Form.Label>
      <Form.Label className="flex flex-col font-medium text-sm">
        CNPJ
        <Form.Input name="cnpj" placeholder="Digite o CNPJ" type="text" />
      </Form.Label>
      <Form.Label className="flex flex-col font-medium text-sm">
        Data de Abertura
        <Form.Input name="openingDate" type="date" />
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
