import { IsEmail, IsEnum, IsNotEmpty, IsString, Length } from "class-validator";
import { UserType } from "../types/registerForm.types";
import { PersonUserBaseDTO } from "./person-user.dto";

export class PersonUserFinalDTO extends PersonUserBaseDTO {
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
