import { Inject, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { ROLE_REPOSITORY } from '../database/database.contants';
import { Role } from 'src/entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @Inject(ROLE_REPOSITORY) private readonly roleRepository: typeof Role,
  ) {}
  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    return await this.roleRepository.create<Role>(createRoleDto);
  }

  async findAll() {
    return await this.roleRepository.findAll();
  }

  async findOne(id: number) {
    const role = await this.roleRepository.findOne({
      where: {
        roleid: id,
      },
    });

    if (role) {
      return role;
    }
  }

  async remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
