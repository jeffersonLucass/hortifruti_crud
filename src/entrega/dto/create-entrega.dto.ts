import { IsString, IsNumber, IsEnum, IsIn, IsDateString } from 'class-validator';

export enum StatusEntrega {
  PENDENTE = 'PENDENTE',
  EM_ROTA = 'EM_ROTA',
  ENTREGUE = 'ENTREGUE',
  CANCELADA = 'CANCELADA',
}

export class CreateEntregaDto {
  @IsString()
  id: string;

  @IsNumber()
  pedido_id: number;

  @IsIn(['entrega', 'retirada'])
  tipo: 'entrega' | 'retirada';

  @IsEnum(StatusEntrega)
  status: StatusEntrega;

  @IsDateString()
  data_entrega: string;
}