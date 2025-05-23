import { IsString, IsOptional, IsEmail, IsIn } from 'class-validator';

export class CreateLojaDto {
  
  @IsString()
  id_loja: string;

  @IsString()
  nome_fantasia: string;

  @IsString()
  razao_social: string;

  @IsString()
  cnpj: string;

  @IsString()
  telefone: string;

  @IsEmail()
  email: string;

  @IsString()
  logradouro: string;

  @IsString()
  numero: string;

  @IsOptional()
  @IsString()
  complemento?: string;

  @IsString()
  bairro: string;

  @IsString()
  cidade: string;

  @IsString()
  uf: string;

  @IsString()
  @IsIn(['ativa', 'inativa'])
  status: string;
}
