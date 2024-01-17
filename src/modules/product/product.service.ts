import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { FilterQuery, Model, ObjectId } from 'mongoose';
import { Products, ProductsDocument } from 'src/schemas/product';
import { CreateProductDto, QueryProductDto, UpdateProductDto } from './dto';
import { Categories, CategoriesDocument } from 'src/schemas/categories';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Products.name) private readonly productRepo: Model<ProductsDocument>,
    @InjectModel(Categories.name) private readonly categoryRepo: Model<CategoriesDocument>,
  ) {}

  async getProducts(dto: QueryProductDto) {
    const { keyword, categoryId } = dto;

    const where: FilterQuery<unknown>[] = [];
    if (keyword && keyword.length) {
      where.push({ name: { $regex: keyword, $options: 'i' } });
    }

    if (categoryId) {
      where.push({ categoryId: new mongoose.Types.ObjectId(categoryId) });
    }

    const products = await this.productRepo.aggregate([
      {
        $match: where.length ? { $and: where } : {},
      },
      {
        $lookup: {
          from: `categories`,
          localField: `categoryId`,
          foreignField: `_id`,
          as: `categories`,
        },
      },
      {
        $unwind: `$categories`,
      },
      {
        $project: {
          _id: 1,
          name: 1,
          quantity: 1,
          description: 1,
          price: 1,
          image: 1,
          category: `$categories.name`,
        },
      },
    ]);
    return products;
  }

  async getProductById(_id: string) {
    const product = await this.productRepo.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(_id) },
      },
      {
        $lookup: {
          from: `categories`,
          localField: `categoryId`,
          foreignField: `_id`,
          as: `categories`,
        },
      },
      {
        $unwind: `$categories`,
      },
      {
        $project: {
          _id: 1,
          name: 1,
          quantity: 1,
          description: 1,
          price: 1,
          image: 1,
          category: `$categories`,
        },
      },
    ]);

    return product[0];
  }

  async createProduct(product: CreateProductDto) {
    const { categoryId } = product;
    const category = await this.categoryRepo.findById(categoryId);

    if (!category) {
      throw new UnprocessableEntityException({ field: `categoryId`, message: `Category is invalid` });
    }

    const newProduct = await new this.productRepo(product).save();

    return newProduct;
  }

  async updateProduct(_id: string, data: UpdateProductDto) {
    const { categoryId } = data;

    if (categoryId) {
      const category = await this.categoryRepo.findById(categoryId);

      if (!category) {
        throw new UnprocessableEntityException({ field: `categoryId`, message: `Category is invalid` });
      }
    }

    const product = await this.productRepo.findByIdAndUpdate({ _id }, data, { new: true });
    return product;
  }

  async deleteProductById(_id: string) {
    const output = await this.productRepo.deleteOne({ _id });

    return output;
  }

  async deleteProducts(ids: string[]) {
    const output = await this.productRepo.deleteMany({ _id: { $in: ids } });

    return output;
  }
}
