import { useFormContext } from "react-hook-form";
import { Form } from "../../../../Form";
import { formatPhoneNumber } from "../../../../../utils/formatters";

export function PhoneNumberField() {
  const { setValue } = useFormContext();

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");
    if (value.length <= 11) {
      const formattedPhone = formatPhoneNumber(value);
      setValue("phoneNumber", formattedPhone, { shouldValidate: true });
    }
  };

  return (
    <Form.Field>
      <Form.Label className="flex flex-col font-medium text-sm">
        Telefone
        <Form.Input
          name="phoneNumber"
          placeholder="Digite o seu telefone"
          type="text"
          onChange={handlePhoneChange}
          maxLength={15}
        />
      </Form.Label>
      <Form.ErrorMessage field="phoneNumber" />
    </Form.Field>
  );
}
