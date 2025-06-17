import { IsNumber, IsOptional, IsString } from "class-validator"

export class CreateProdutoDto {
    @IsString()
    nome: string

    @IsString()
    descricao: string

    @IsNumber()
    preco: number

    @IsOptional()
    @IsString()
    categoria_id?: string

    @IsOptional()
    @IsString()
    nova_categoria?: string

    @IsNumber()
    estoque: number
}
