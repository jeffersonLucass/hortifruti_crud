import {IsNumber, IsString } from 'class-validator';

export class CreateCarrinhoDto {
    
    @IsString()
    usuario_id:string

    @IsNumber()
    total:number
}
