import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT, HOST } from './constants';
import { Logger, ValidationPipe } from '@nestjs/common';
import { LoggingInterceptor } from './configs/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.enableCors();
  await app.listen(PORT);

  const logger = new Logger('Pet Shop');
  logger.log(`Application is running on http://${HOST}:${PORT}`);
}

bootstrap();
