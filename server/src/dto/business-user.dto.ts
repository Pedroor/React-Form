import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { BusinessUserBaseDTO } from "./business-user-base.dto";
import { UserType } from "../types/registerForm.types";

export class BusinessUserFinalDTO extends BusinessUserBaseDTO {
  @IsNotEmpty({ message: "O e-mail é obrigatório" })
  @IsEmail({}, { message: "Formato de e-mail inválido" })
  email: string;

  @IsNotEmpty({ message: "A senha é obrigatória" })
  @IsString()
  password: string;

  @IsEnum(UserType, { message: "Selecione um tipo de usuário" })
  @IsString()
  userType: UserType;
}
