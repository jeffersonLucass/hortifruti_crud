import { IsString, IsEmail, ValidateNested, IsOptional } from 'class-validator';
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
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateEnderecoDto)
  endereco?: CreateEnderecoDto;
}

export class LoginDto {
    @IsString()
    nome: string;
    @IsString()
    senha: string;
   
}
