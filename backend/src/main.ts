import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { EnvKeys } from './shared/enums';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors({
    origin: configService.getOrThrow<string>(EnvKeys.FRONTEND_URL),
  });

  const port = configService.getOrThrow<number>(EnvKeys.PORT);

  await app.listen(port);
}
void bootstrap();
