import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AnotherUsersMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Request Another middlewares...');
    next();
  }
}
