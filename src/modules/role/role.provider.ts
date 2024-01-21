import { Role } from 'src/entities/role.entity';
import { ROLE_REPOSITORY } from '../database/database.contants';

export const roleProvider = [
  {
    provide: ROLE_REPOSITORY,
    useValue: Role,
  },
];
