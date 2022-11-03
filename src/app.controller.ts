import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Foo } from './classes/foo.class';
import { IBar } from './interfaces/bar.interface';
import { FooWithoutId } from './types/foo-without-id.type';

@ApiTags('app')
@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/string-return')
  stringReturn(): string {
    return this.appService.stringReturn();
  }

  @Get('/class-return')
  classReturn(): Foo {
    return this.appService.classReturn();
  }

  @Get('/interface-return')
  interfaceReturn(): IBar {
    return this.appService.interfaceReturn();
  }

  @Get('/type-return')
  typeReturn(): FooWithoutId {
    return this.appService.typeReturn();
  }
}
