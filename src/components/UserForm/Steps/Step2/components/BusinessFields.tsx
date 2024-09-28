import { useFormContext } from "react-hook-form";
import { formatCNPJ } from "../../../../../utils/formatters";
import { Form } from "../../../../Form";
import { PhoneNumberField } from "./PhoneNumberField";

interface IBussinessFieldsProps {
  withTitle?: boolean;
}

export function BusinessFields({ withTitle = true }: IBussinessFieldsProps) {
  const { setValue } = useFormContext();

  const handleCNPJChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");
    if (value.length <= 14) {
      const formattedCNPJ = formatCNPJ(value);
      setValue("cnpj", formattedCNPJ, { shouldValidate: true });
    }
  };

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
          <Form.Input
            name="cnpj"
            placeholder="Digite o CNPJ"
            type="text"
            onChange={handleCNPJChange}
            maxLength={18}
          />
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
      <PhoneNumberField />
    </>
  );
}
