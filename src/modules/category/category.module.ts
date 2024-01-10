import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Categories, CategoriesSchema } from 'src/schemas/categories';

@Module({
  imports: [MongooseModule.forFeature([{ name: Categories.name, schema: CategoriesSchema }])],
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
