import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './service/users/users.service';
import { UsersMiddleware } from './middlewares/users/users.middleware';
import { AnotherUsersMiddleware } from './middlewares/another_users/another_users.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UsersMiddleware)
      .forRoutes('users', 'users/:id')
      .apply(AnotherUsersMiddleware)
      .forRoutes('users');
  }
}
