import { UserType } from "../../../../../types/registerForm.types";
import { Form } from "../../../../Form";

export function UserTypeField() {
  return (
    <>
      <Form.Field className="flex items-center gap-2 mt-2">
        <Form.Label className="flex items-center">
          <Form.Radio type="radio" name="userType" value={UserType.PERSON} />
          Pessoa física
        </Form.Label>

        <Form.Label className="flex items-center">
          <Form.Radio name="userType" value={UserType.BUSINESS} />
          Pessoa jurídica
        </Form.Label>
      </Form.Field>
      <Form.ErrorMessage field="userType" />
    </>
  );
}
