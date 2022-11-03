import { Injectable } from '@nestjs/common';
import { Foo } from './classes/foo.class';
import { IBar } from './interfaces/bar.interface';
import { FooWithoutId } from './types/foo-without-id.type';

@Injectable()
export class AppService {
  stringReturn(): string {
    return 'Hello World!';
  }

  classReturn(): Foo {
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
}
