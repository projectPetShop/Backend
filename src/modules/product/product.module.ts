import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Products, ProductsSchema } from 'src/schemas/product';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Products.name, schema: ProductsSchema }
  ])],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
