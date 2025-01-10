import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDTO, metadata: ArgumentMetadata) {
    console.log('Inside validator');
    console.log(value);
    console.log(metadata);

    const ageParseInt = parseInt(value.age.toString());

    if (isNaN(ageParseInt)) {
      console.log(value.age + ' is not a number');

      throw new HttpException(
        value.age + ' is not a number',
        HttpStatus.BAD_REQUEST,
      );
    }

    return { ...value, age: ageParseInt };
  }
}
