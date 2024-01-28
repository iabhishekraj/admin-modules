import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'facilities' })
export class Facility extends Model<Facility> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
  })
  facilityid: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  facilityname: string;
}
