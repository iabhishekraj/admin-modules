import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { roleProvider } from './role.provider';

@Module({
  controllers: [RoleController],
  providers: [RoleService, ...roleProvider],
})
export class RoleModule {}
