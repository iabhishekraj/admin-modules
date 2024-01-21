import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database/database.module';
import { RoleModule } from './modules/role/role.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, DatabaseModule, RoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
