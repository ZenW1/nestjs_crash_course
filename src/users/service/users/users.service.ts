import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private readonly fakeUser = [
    {
      username: 'David',
      email: 'David@gmail.com',
    },
    {
      username: 'David',
      email: 'David@gmail.com',
    },
    {
      username: 'David',
      email: 'David@gmail.com',
    },
  ];

  getUserData() {
    return this.fakeUser;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUser.push(userDetails);
    return this.fakeUser;
  }

  getUserById(id: number) {
    return this.fakeUser[id];
  }
}
