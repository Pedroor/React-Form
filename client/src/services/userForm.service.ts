import { RegisterFormData } from "../types/registerForm.types";
import api from "./api";

const postRegister = (data: RegisterFormData) => {
  return api.post("/register", data);
};

export { postRegister };
