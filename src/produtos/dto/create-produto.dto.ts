import { IsNumber, IsString } from "class-validator"

export class CreateProdutoDto {
    
    @IsString()
    nome: string

    @IsString()
    descricao: string

    @IsNumber()
    preco: number

    @IsString()
    categoria_id: string

    @IsNumber()
    estoque: number

}
