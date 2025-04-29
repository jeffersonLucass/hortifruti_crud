import { IsUUID, IsInt, IsNumber, IsPositive } from 'class-validator';

export class CreateItemCarrinhoDto {
  @IsUUID()
  id: string;

  @IsUUID()
  carrinho_id: string;

  @IsUUID()
  produto_id: string;

  @IsInt()
  @IsPositive()
  quantidade: number;

  @IsNumber()
  @IsPositive()
  subtotal: number;
}
