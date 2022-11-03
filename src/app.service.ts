import { Injectable } from '@nestjs/common';
import { FooDto } from './dto/foo.dto';
import { IBar } from './interfaces/bar.interface';
import { FooWithoutId } from './types/foo-without-id.type';

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
}
