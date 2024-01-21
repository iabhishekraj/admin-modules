import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'roles' })
export class Role extends Model<Role> {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
  })
  roleid: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  rolename: string;
}
