import { IsString, IsNumber, IsEnum, IsDateString } from 'class-validator';

export class CreateEntregaDto {
  
  @IsString()
  id: string;

  @IsNumber()
  pedido_id: number;

  @IsEnum(['entrega', 'retirada'])
  tipo: 'entrega' | 'retirada';

  @IsString()
  status: string;

  @IsDateString()
  data_entrega: string;
}