import { Inject, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ROLE_REPOSITORY } from '../database/database.contants';
import { Role } from 'src/entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @Inject(ROLE_REPOSITORY) private readonly roleRepository: typeof Role,
  ) {}
  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    console.log('service: createRoleDto', createRoleDto);
    return await this.roleRepository.create<Role>(createRoleDto);
  }

  async findAll() {
    return await this.roleRepository.findAll();
  }

  async findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  async remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
