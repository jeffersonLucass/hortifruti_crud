import { IsString, IsEmail, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateEnderecoDto } from '../../endereco/dto/create-endereco.dto';

export class RegisterDto {
  @IsString()
  nome: string;

  @IsString()
  senha: string;

  @IsEmail()
  email: string;

  @IsString()
  telefone: string;

  @ValidateNested()
  @Type(() => CreateEnderecoDto)
  endereco: CreateEnderecoDto;
}

export class LoginDto {
    @IsString()
    nome: string;
    @IsString()
    senha: string;
   
}
