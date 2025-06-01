import { IsString, IsOptional, IsEmail, IsIn, IsBoolean } from 'class-validator';

export class CreateLojaDto {

  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  senha: string;

  @IsString()
  cpf: string;

  @IsOptional()
  @IsBoolean()
  ativo?: boolean;

  @IsOptional()
  @IsString()
  fotoPerfil?: string;

  @IsOptional()
  dataCadastro?: Date;

  @IsOptional()
  enderecoId?: string;

  @IsOptional()
  @IsString()
  telefone?: string;

  @IsOptional()
  @IsString()
  nome_fantasia?: string;

  @IsOptional()
  @IsString()
  razao_social?: string;

  @IsOptional()
  @IsString()
  cnpj?: string;

  @IsOptional()
  @IsString()
  complemento?: string;

  @IsOptional()
  @IsIn(['ativa', 'inativa'])
  status?: string;
}
