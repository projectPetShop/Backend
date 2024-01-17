import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Categories, CategoriesDocument } from 'src/schemas/categories';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Categories.name) private readonly categoryRepo: Model<CategoriesDocument>) {}

  async getCategories() {
    const categories = await this.categoryRepo.find().lean();

    return categories;
  }

  async getCategoryById(id: ObjectId) {
    const category = await this.categoryRepo.findById(id);

    return category;
  }

  async createCategory(name: string) {
    const newCategory = await this.categoryRepo.create({ name });

    return { id: newCategory.id };
  }

  async removeCategory(_id: ObjectId) {
    const output = await this.categoryRepo.deleteOne({ _id });

    return output.deletedCount;
  }

  async updateCategory(_id: ObjectId, name: string) {
    const category = await this.categoryRepo.findByIdAndUpdate({ _id }, { name }, { new: true }).lean();

    return category;
  }

  async isCategoryNameExists(name: string) {
    const category = await this.categoryRepo.find({ where: { name } }).lean();

    return Boolean(category.length);
  }
}
