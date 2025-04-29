import { IsUUID, IsString, IsDateString, IsNumber, IsPositive } from 'class-validator';

export class CreatePedidoDto {
  
  @IsUUID()
  id: string;

  @IsUUID()
  usuario_id: string;

  @IsDateString()
  data_hora: string;

  @IsString()
  status: string;

  @IsNumber()
  @IsPositive()
  valor_total: number;

  @IsUUID()
  pagamento_id: string;
}

