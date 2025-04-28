import { Module } from '@nestjs/common';
import { ItemCarrinhoService } from './item_carrinho.service';
import { ItemCarrinhoController } from './item_carrinho.controller';

@Module({
  controllers: [ItemCarrinhoController],
  providers: [ItemCarrinhoService],
})
export class ItemCarrinhoModule {}
