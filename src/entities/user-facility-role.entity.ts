import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from './user.entity';
import { Facility } from './facility.entity';
import { Role } from './role.entity';

@Table({ tableName: 'userfacilityroles' })
export class UserFacilityRole extends Model<UserFacilityRole> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
  })
  userfacilityroleid: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userid: string;
  @BelongsTo(() => User)
  users: User;

  @ForeignKey(() => Facility)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  facilityid: string;
  @BelongsTo(() => Facility)
  facilities: Facility;

  @ForeignKey(() => Role)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  roleid: string;
  @BelongsTo(() => Role)
  roles: Role;
}
