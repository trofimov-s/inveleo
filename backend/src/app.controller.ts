import { Controller, Get } from '@nestjs/common';
import { AppMessage } from '@/generated/prisma/client';

import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('message')
  getMessage(): Promise<AppMessage | null> {
    return this.appService.getMessage();
  }
}
