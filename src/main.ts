import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT, HOST } from './constants';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);

  const logger = new Logger('Pet Shop');
  logger.log(`Application is running on http://${HOST}:${PORT}`);
}

bootstrap();
