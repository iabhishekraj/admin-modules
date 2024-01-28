import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('role')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @ApiOperation({ summary: 'Save a role in the db' })
  @ApiResponse({
    status: 201,
    description: 'Role is saved successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'Validation error while creating role',
  })
  @ApiResponse({
    status: 201,
    description: 'Save operation failed for role',
  })
  @ApiBody({ type: CreateRoleDto })
  @Post()
  async create(@Body() createRoleDto: CreateRoleDto): Promise<CreateRoleDto> {
    return await this.roleService.create(createRoleDto);
  }

  @Get()
  findAll() {
    return this.roleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const role = await this.roleService.findOne(+id);
    if (role) {
    } else {
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleService.remove(+id);
  }
}
