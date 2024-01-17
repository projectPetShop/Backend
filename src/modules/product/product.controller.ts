import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UnprocessableEntityException } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto, QueryProductDto, UpdateProductDto } from './dto';
import { ObjectId } from 'mongoose';

@Controller('/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(`/`)
  async getProducts(@Query() dto: QueryProductDto) {
    const products = await this.productService.getProducts(dto);

    return products;
  }

  @Post(`/`)
  async createProduct(@Body() dto: CreateProductDto) {
    const newProduct = await this.productService.createProduct(dto);

    return newProduct;
  }

  @Get(`/:id`)
  async getProductById(@Param(`id`) id: string) {
    const product = await this.productService.getProductById(id);

    return product;
  }

  @Patch(`/:id`)
  async updateProduct(@Param(`id`) id: string, @Body() data: UpdateProductDto) {
    const product = await this.productService.getProductById(id);
    if (!product) {
      throw new UnprocessableEntityException({ field: `id`, message: `Product is invalid` });
    }

    const output = await this.productService.updateProduct(id, data);

    return output;
  }

  @Delete(`/:id`)
  async deleteProduct(@Param(`id`) id: string) {
    const product = await this.productService.getProductById(id);
    if (!product) {
      throw new UnprocessableEntityException({ field: `id`, message: `Product is invalid` });
    }

    const output = await this.productService.deleteProductById(id);

    return { deleteCount: output.deletedCount };
  }

  @Delete(`/`)
  async deleteProducts(@Body(`ids`) ids: string[]) {
    const output = await this.productService.deleteProducts(ids);

    return { deleteCount: output.deletedCount };
  }
}
