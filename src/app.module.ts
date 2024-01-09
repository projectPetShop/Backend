import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.modules';
import { ConfigModule } from '@nestjs/config';
import { MONGO_URI } from './constants';
import { ProductModule } from './modules/product/product.module';
import { OrderModule } from './modules/order/order.module';
import { CategoryModule } from './modules/category/category.module';
import { ServiceModule } from './modules/service/service.module';
import { RatingModule } from './modules/rating/rating.module';
import { ItemModule } from './modules/item/item.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(MONGO_URI),
    UserModule,
    ProductModule,
    OrderModule,
    CategoryModule,
    ServiceModule,
    RatingModule,
    ItemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
