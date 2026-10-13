import { HttpStatus, Injectable, NotFoundException, ServiceUnavailableException } from '@nestjs/common';
import { PrismaService } from '@/prisma';
import { AppMessage, Prisma } from '@/generated/prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getMessage(): Promise<AppMessage | null> {
    try {
      const appMessage = await this.prisma.appMessage.findUnique({
        where: { id: 1 },
      });
  
      if (!appMessage) {
        throw new NotFoundException({ code: 'MESSAGE_NOT_FOUND' });
      }
  
      return appMessage;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P1001') {
        throw new ServiceUnavailableException({ code: 'SERVICE_UNAVAILABLE' });
      }

      throw error;
    }
  }
}
