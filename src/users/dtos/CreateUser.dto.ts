import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
  age: number;
}
