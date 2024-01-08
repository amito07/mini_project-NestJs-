import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagModule } from './tag.module';
import { DatabaseModule } from './config/database.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
@Module({
  imports: [TagModule, DatabaseModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
