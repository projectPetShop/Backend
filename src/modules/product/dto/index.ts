import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';
import { DEFAULT_PRODUCT_IMAGE } from 'src/constants';

export class CreateProductDto {
  @IsString()
  categoryId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  quantity: number = 0;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  @IsOptional()
  image: string = DEFAULT_PRODUCT_IMAGE;
}

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  categoryId: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
  @IsOptional()
  quantity: number;

  @IsOptional()
  @IsString()
  description: string;

  @IsNumber()
  @IsOptional()
  price: number;

  @IsString()
  @IsOptional()
  image: string = DEFAULT_PRODUCT_IMAGE;
}

export class QueryProductDto {
  @IsOptional()
  @IsString()
  keyword: string;

  @IsOptional()
  categoryId: string;
}
