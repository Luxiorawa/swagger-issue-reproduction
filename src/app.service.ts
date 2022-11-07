import { Injectable } from '@nestjs/common';
import { FooDto } from './dto/foo.dto';
import { IBar } from './interfaces/bar.interface';
import { FooWithoutId } from './types/foo-without-id.type';
import { AbstractFoo } from './classes/abstract-class-single-object.class';
import { AbstractBar } from './classes/abstract-class-array.class';

@Injectable()
export class AppService {
  stringReturn(): string {
    return 'Hello World!';
  }

  dtoReturn(): FooDto {
    return {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
    };
  }

  interfaceReturn(): IBar {
    return {
      id: 1,
      label: 'Label',
      comments: 'Here is some comments',
    };
  }

  typeReturn(): FooWithoutId {
    return {
      first_name: 'John',
      last_name: 'Doe',
    };
  }

  abstractClassSingleObjectReturn(): AbstractFoo {
    return {
      id: 1,
    };
  }

  abstractClassArrayReturn(): AbstractBar {
    return { array: ['1', '2', '3'] };
  }
}
