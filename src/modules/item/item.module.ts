import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Items, ItemsSchema } from 'src/schemas/items';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Items.name, schema: ItemsSchema }
  ])],
  providers: [ItemService],
  controllers: [ItemController]
})
export class ItemModule {}
