import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Role } from './role.entity';
import { Permission } from './permission.entity';

@Table({ tableName: 'rolepermissions' })
export class RolePermission extends Model<RolePermission> {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    primaryKey: true,
  })
  rolepermissionid: string;

  @ForeignKey(() => Role)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  roleid: string;
  @BelongsTo(() => Role)
  roles: Role;

  @ForeignKey(() => Permission)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  permissionid: string;
  @BelongsTo(() => Permission)
  permissions: Permission;
}
