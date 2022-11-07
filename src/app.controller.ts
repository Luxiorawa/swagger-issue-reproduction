import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { FooDto } from './dto/foo.dto';
import { IBar } from './interfaces/bar.interface';
import { FooWithoutId } from './types/foo-without-id.type';
import { AbstractFoo } from './classes/abstract-class-single-object.class';
import { AbstractBar } from './classes/abstract-class-array.class';

@ApiTags('app')
@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/string-return')
  stringReturn(): string {
    return this.appService.stringReturn();
  }

  @Get('/dto-return')
  dtoReturn(): FooDto {
    return this.appService.dtoReturn();
  }

  @Get('/interface-return')
  interfaceReturn(): IBar {
    return this.appService.interfaceReturn();
  }

  @Get('/type-return')
  typeReturn(): FooWithoutId {
    return this.appService.typeReturn();
  }

  @Get('/abstract-class-single-object-return')
  abstractClassSingleObjectReturn(): AbstractFoo {
    return this.appService.abstractClassSingleObjectReturn();
  }

  @Get('/abstract-class-array-return')
  abstractClassArrayReturn(): AbstractBar {
    return this.appService.abstractClassArrayReturn();
  }
}
