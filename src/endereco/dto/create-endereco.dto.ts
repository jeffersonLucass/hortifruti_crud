import { IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateEnderecoDto {
  
  @IsString()
  rua: string;

  @IsString()
  numero: string;

  @IsString()
  bairro: string;

  @IsOptional()
  @IsString()
  complemento?: string;
}