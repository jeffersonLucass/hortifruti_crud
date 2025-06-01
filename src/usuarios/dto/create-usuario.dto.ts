import { IsString, IsEmail, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Endereco } from "../../endereco/entities/endereco.entity";

export class CreateUsuarioDto {
    @IsString()
    nome: string;
    
    @IsEmail()
    email: string;
    
    @IsString()
    senha: string;
    
    @IsString()
    telefone: string;

    @ValidateNested()
    @Type(() => Endereco)
    @IsOptional()
    endereco?: Partial<Endereco>;
}