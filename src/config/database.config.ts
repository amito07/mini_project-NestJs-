import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const config: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123',
  database: 'nest',
  schema:'nestjs',
  autoLoadModels: true,
  synchronize: true,
};
