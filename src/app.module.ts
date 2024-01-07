import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://lesythanh063:lesythanh063@cluster0.ww0jima.mongodb.net/`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
