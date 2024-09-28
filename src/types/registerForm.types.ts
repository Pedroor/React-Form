import { z } from "zod";
import {
  businessUserFinalSchema,
  personUserFinalSchema,
} from "../schemas/registerFormSchema";

export type RegisterFormData = z.infer<
  typeof personUserFinalSchema | typeof businessUserFinalSchema
>;
