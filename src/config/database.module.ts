import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { config } from './database.config';

@Module({
  imports: [SequelizeModule.forRoot(config)],
})
export class DatabaseModule {}
