import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');

    const { authorization } = req.headers;
    if (!authorization) {
      throw new HttpException('Unauthorized', 401);
    } else {
      console.log('Authorized');
    }

    next();
  }
}
