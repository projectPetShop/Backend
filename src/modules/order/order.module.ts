import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Orders, OrdersSchema } from 'src/schemas/order';

@Module({
    imports: [MongooseModule.forFeature([
        { name: Orders.name, schema: OrdersSchema }
      ])],
    providers: [OrderService],
    controllers: [OrderController]
})
export class OrderModule {}
