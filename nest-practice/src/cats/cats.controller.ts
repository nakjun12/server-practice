import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/filter/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptor/success.interceptor';
import { PositiveIntPipe } from 'src/common/pipe/positive-int.pipe';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  @UseInterceptors(SuccessInterceptor)
  @UseFilters(HttpExceptionFilter)
  getAllCat() {
    console.log('hello controller');
    return { cats: 'getAllCat' };
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
    return 'cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'put cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'patch cat';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete cat';
  }
}
