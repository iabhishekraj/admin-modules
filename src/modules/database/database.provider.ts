import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { SEQUELIZE } from 'src/app.contants';
import { Facility } from 'src/entities/facility.entity';
import { Permission } from 'src/entities/permission.entity';
import { RolePermission } from 'src/entities/role-permission.entity';
import { Role } from 'src/entities/role.entity';
import { UserFacilityRole } from 'src/entities/user-facility-role.entity';
import { User } from 'src/entities/user.entity';

export const DatabaseProvider = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const config: SequelizeOptions = {
        dialect: 'sqlite',
        storage:
          '/home/nikita/Documents/F-Drive/abhishek/projects/databases/sqlite-dbs/admin-module.db',
      };
      const sequelize = new Sequelize(config);
      sequelize.addModels([
        User,
        Role,
        Facility,
        Permission,
        RolePermission,
        UserFacilityRole,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
