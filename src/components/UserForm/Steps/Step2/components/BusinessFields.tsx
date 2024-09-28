import { Form } from "../../../../Form";

interface IBussinessFieldsProps {
  withTitle?: boolean;
}

export function BusinessFields({ withTitle = true }: IBussinessFieldsProps) {
  return (
    <>
      {withTitle && <h2 className="text-lg font-bold">Pessoa Júridica</h2>}
      <Form.Field>
        <Form.Label className="flex flex-col font-medium text-sm">
          Razão Social
          <Form.Input
            name="companyName"
            placeholder="Digite a razão social"
            type="text"
          />
        </Form.Label>
        <Form.ErrorMessage field="companyName" />
      </Form.Field>
      <Form.Field>
        <Form.Label className="flex flex-col font-medium text-sm">
          CNPJ
          <Form.Input name="cnpj" placeholder="Digite o CNPJ" type="text" />
        </Form.Label>
        <Form.ErrorMessage field="cnpj" />
      </Form.Field>
      <Form.Field>
        <Form.Label className="flex flex-col font-medium text-sm">
          Data de Abertura
          <Form.Input name="openingDate" type="date" />
        </Form.Label>
        <Form.ErrorMessage field="openingDate" />
      </Form.Field>
      <Form.Field>
        <Form.Label className="flex flex-col font-medium text-sm">
          Telefone
          <Form.Input
            name="phoneNumber"
            placeholder="Digite o seu telefone"
            type="text"
          />
        </Form.Label>
        <Form.ErrorMessage field="phoneNumber" />
      </Form.Field>
    </>
  );
}
