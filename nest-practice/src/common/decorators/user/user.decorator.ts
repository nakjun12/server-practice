import { Request } from 'express';

import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { CatCurrentDto } from 'src/cats/dto/cat.current.dto';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest();
    return request.user as CatCurrentDto;
  },
);
