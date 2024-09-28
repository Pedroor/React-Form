import {
  businessUserFinalSchema,
  personUserFinalSchema,
  step1Schema,
  step3Schema,
} from "../schemas/registerFormSchema";
import { UserSchemaType, UserType } from "../types/registerForm.types";

export function getUserSchema(
  step: number,
  userType: UserType
): UserSchemaType {
  if (step === 1) {
    return step1Schema;
  }

  if (step === 3) {
    return step3Schema;
  }

  if (step === 4 || step === 2) {
    return userType === UserType.PERSON
      ? personUserFinalSchema
      : businessUserFinalSchema;
  }

  return personUserFinalSchema;
}
