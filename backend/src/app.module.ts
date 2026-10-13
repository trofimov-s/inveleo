import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma';
import { ConfigModuleConfig } from '@/core/configs';

@Module({
  imports: [ConfigModule.forRoot(ConfigModuleConfig), PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
