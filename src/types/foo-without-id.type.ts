import { FooDto } from './../dto/foo.dto';

export type FooWithoutId = Omit<FooDto, 'id'>;
