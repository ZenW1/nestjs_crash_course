import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dtos/CreateUser.dto';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/service/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {
    console.log('UsersController created');
  }

  @Get()
  getUser(@Query('sortBy') sortBy: string) {
    console.log(sortBy);

    return [
      {
        username: 'David',
      },
    ];
  }
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    const user = this.userService.getUserById(id);
    if (user === undefined || user === null)
      throw new HttpException('User not found', 404);
    return user;
  }
  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDTO) {
    console.log(userData);
    console.log(userData.age.toPrecision);
    return this.userService.createUser(userData);
  }
}
