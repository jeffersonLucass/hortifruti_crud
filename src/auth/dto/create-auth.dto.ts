import { IsString, IsEmail } from 'class-validator';

export class RegisterDto {
    @IsString()
    nome: string;
    @IsString()
    senha: string;
    @IsEmail()
    email: string;
    @IsString()
    telefone: string;
    @IsString()
    endereco: string;
}
export class LoginDto {
    @IsString()
    nome: string;
    @IsString()
    senha: string;
   
}
