import { z } from "zod";
import {
  businessUserFinalSchema,
  personUserFinalSchema,
  step1Schema,
  step3Schema,
} from "../schemas/registerFormSchema";

export enum UserType {
  PERSON = "Person",
  BUSINESS = "Business",
  NONE = "None",
}

export type RegisterFormData = z.infer<
  typeof personUserFinalSchema | typeof businessUserFinalSchema
>;

export type UserSchemaType =
  | z.ZodObject<(typeof step1Schema)["shape"]>
  | z.ZodObject<(typeof step3Schema)["shape"]>
  | z.ZodObject<(typeof personUserFinalSchema)["shape"]>
  | z.ZodObject<(typeof businessUserFinalSchema)["shape"]>;

export interface StepProps {
  onNext(data: RegisterFormData): Promise<void>;
  goBack?(): Promise<void>;
  userType?: UserType;
}
