import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Everyone, I am learning Node.js and Nest.js';
  }
}
