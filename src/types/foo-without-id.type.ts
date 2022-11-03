import { Foo } from './../classes/foo.class';
import { OmitType } from '@nestjs/swagger';

export type FooWithoutId = OmitType(Foo, ['id']);
