import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { SEQUELIZE } from 'src/app.contants';
import { Role } from 'src/entities/role.entity';

export const DatabaseProvider = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const config: SequelizeOptions = {
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        host: process.env.HOST,
        port: 3306,
        dialect: 'mysql',
      };
      const sequelize = new Sequelize(config);
      sequelize.addModels([Role]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
