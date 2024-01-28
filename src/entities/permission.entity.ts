import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'permissions' })
export class Permission extends Model<Permission> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
  })
  permissionid: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  permissiondesc: string;
}
