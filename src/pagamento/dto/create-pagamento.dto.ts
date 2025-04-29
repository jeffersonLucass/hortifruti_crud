import { IsString, IsDate, IsIn } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePagamentoDto {

  @IsString()
  id: string;

  @IsString()
  @IsIn(['PIX', 'cartão', 'dinheiro'])
  tipo: string;

  @IsString()
  status: string;

  @Type(() => Date)
  @IsDate()
  data_pagamento: Date;
}

