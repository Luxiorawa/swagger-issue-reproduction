import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    return await new Promise((resolve) => resolve('Hello World!'));
  }
}
