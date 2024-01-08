import { IsInt, IsString } from 'class-validator';

export class createUserDTO {
  name: string;
  age: number;
  email: string;
}

//create DTO With class-validator

export class createUserDTOClassValidator {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  email: string;
}
