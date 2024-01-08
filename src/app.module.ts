import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.modules';
import { ConfigModule } from '@nestjs/config';
import { MONGO_URI } from './constants';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(MONGO_URI),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
