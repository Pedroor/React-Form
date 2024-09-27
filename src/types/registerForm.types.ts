import { z } from "zod";
import registerFormSchema from "../schemas/registerFormSchema";
export type RegisterFormData = z.infer<typeof registerFormSchema>;
