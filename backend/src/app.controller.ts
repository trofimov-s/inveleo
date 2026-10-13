import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('message')
  getMessage(): { message: string } {
    return this.appService.getMessage();
  }
}
