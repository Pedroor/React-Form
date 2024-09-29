import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";
import { UserType } from "../types/registerForm.types";
import { PersonUserFinalDTO } from "../dto/person-user-base.dto";
import { BusinessUserFinalDTO } from "../dto/business-user.dto";

export const dynamicValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { userType } = req.body;

  let dto: any;
  if (userType === UserType.PERSON) {
    dto = PersonUserFinalDTO;
  } else if (userType === UserType.BUSINESS) {
    dto = BusinessUserFinalDTO;
  } else {
    res.status(400).json({ message: "Tipo de usuário inválido" });
    return;
  }

  const dtoObject = plainToInstance(dto, req.body);
  const errors = await validate(dtoObject);

  if (errors.length > 0) {
    const formattedErrors = errors.map((error) => ({
      property: error.property,
      constraints: error.constraints,
    }));
    res.status(400).json({ errors: formattedErrors });
  } else {
    req.body = dtoObject;
    next();
  }
};
