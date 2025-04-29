import { IsString, IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreateAvaliacaoDto {
  @IsString()
  id: string;

  @IsNumber()
  usuario_id: number;

  @IsNumber()
  produto_id: number;

  @IsNumber()
  nota: number;

  @IsOptional()
  @IsString()
  comentario?: string;

  @IsDateString()
  data_avaliacao: string;
}