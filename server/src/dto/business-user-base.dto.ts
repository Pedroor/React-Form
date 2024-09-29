import { IsNotEmpty, IsString } from "class-validator";

export class BusinessUserBaseDTO {
  @IsNotEmpty({ message: "A razão social é obrigatória" })
  @IsString()
  companyName: string;

  @IsNotEmpty({ message: "O CNPJ é obrigatório" })
  @IsString()
  cnpj: string;

  @IsNotEmpty({ message: "A data de abertura é obrigatória" })
  @IsString()
  openingDate: string;

  @IsNotEmpty({ message: "O número de telefone é obrigatório" })
  @IsString()
  phoneNumber: string;
}
