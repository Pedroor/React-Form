import { IsNotEmpty, IsString } from "class-validator";

export class PersonUserBaseDTO {
  @IsNotEmpty({ message: "O nome completo é obrigatório" })
  @IsString()
  fullName: string;

  @IsNotEmpty({ message: "O CPF é obrigatório" })
  @IsString()
  cpf: string;

  @IsNotEmpty({ message: "A data de nascimento é obrigatória" })
  @IsString()
  birthDate: string;

  @IsNotEmpty({ message: "O número de telefone é obrigatório" })
  @IsString()
  phoneNumber: string;
}
