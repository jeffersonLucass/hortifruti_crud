import { IsString, IsEmail } from "class-validator";

export class CreateUsuarioDto {
    
    @IsString()
    nome: string;
    
    @IsEmail()
    email: string;
    
    @IsString()
    senha: string;
    
    @IsString()
    telefone: string;

    @IsString()
    endereco: string;
}