import { Injectable } from '@nestjs/common';
import { CreateUserResponseDto } from './dto/create-user-response.dto';

@Injectable()
export class UserService {
  create(createUserResponseDto: CreateUserResponseDto) {
    console.log('createUserResponseDto - ', createUserResponseDto);
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
