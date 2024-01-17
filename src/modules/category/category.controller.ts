import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { ObjectId } from 'mongoose';

@Controller('/categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('/')
  async getCategories() {
    const categories = await this.categoryService.getCategories();

    return categories;
  }

  @Get(`/:id`)
  async getCategoryById(@Param(`id`) id: ObjectId) {
    const category = await this.categoryService.getCategoryById(id);

    if (!category) {
      throw new NotFoundException({ message: `Category doesn't exist` });
    }

    return category;
  }

  @Post(`/`)
  async createNewCategory(@Body(`name`) name: string) {
    if (name.length == 0) {
      throw new BadRequestException({ field: `name`, message: `name should not be empty` });
    }

    const isCategoryExists = await this.categoryService.isCategoryNameExists(name);
    if (isCategoryExists) {
      throw new BadRequestException({ message: `Category has already existed` });
    }

    const newCategory = await this.categoryService.createCategory(name);

    return newCategory;
  }

  @Patch(`/:id`)
  async updateCategory(@Param(`id`) id: ObjectId, @Body(`name`) name: string) {
    if (name.length == 0) {
      throw new BadRequestException({ field: `name`, message: `name should not be empty` });
    }

    const category = await this.categoryService.getCategoryById(id);

    if (!category) {
      throw new NotFoundException({ message: `Category doesn't exist` });
    }

    const output = await this.categoryService.updateCategory(id, name);
    return { id: output._id };
  }

  @Delete(`/:id`)
  async deleteCategory(@Param(`id`) id: ObjectId) {
    const category = await this.categoryService.getCategoryById(id);

    if (!category) {
      throw new NotFoundException({ message: `Category doesn't exist` });
    }

    const output = await this.categoryService.removeCategory(id);
    return { deleteCount: output };
  }
}
