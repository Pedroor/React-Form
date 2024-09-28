import { useFormContext } from "react-hook-form";
import { Form } from "../../../../Form";
import { formatCPF } from "../../../../../utils/formatters";
import { PhoneNumberField } from "./PhoneNumberField";

interface IPersonFieldsProps {
  withTitle?: boolean;
}
export function PersonFields({ withTitle = true }: IPersonFieldsProps) {
  const { setValue } = useFormContext();

  const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCPF = formatCPF(event.target.value);
    setValue("cpf", formattedCPF, { shouldValidate: true });
  };

  return (
    <>
      {withTitle && <h2 className="text-lg font-bold">Pessoa Física</h2>}
      <Form.Field>
        <Form.Label className="flex flex-col font-medium text-sm">
          Nome
          <Form.Input
            name="fullName"
            placeholder="Digite o seu nome"
            type="text"
          />
        </Form.Label>
        <Form.ErrorMessage field="fullName" />
      </Form.Field>
      <Form.Field>
        <Form.Label className="flex flex-col font-medium text-sm">
          CPF
          <Form.Input
            name="cpf"
            placeholder="Digite o seu CPF"
            type="text"
            onChange={handleCPFChange}
            maxLength={14}
          />
        </Form.Label>
        <Form.ErrorMessage field="cpf" />
      </Form.Field>
      <Form.Field>
        <Form.Label className="flex flex-col font-medium text-sm">
          Data de nascimento
          <Form.Input name="birthDate" type="date" />
        </Form.Label>
        <Form.ErrorMessage field="birthDate" />
      </Form.Field>
      <PhoneNumberField />
    </>
  );
}
