import { IsNumber, IsString } from "class-validator"

export class CreateUserDto {
    @IsString()
    user_name: string
    password: string
    name: string
    @IsNumber()
    phone: number
    address: string
    role: string
}

export class UpdateUserDto{}
