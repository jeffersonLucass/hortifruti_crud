import { Module } from '@nestjs/common';
import { ItemCarrinhoService } from './item_carrinho.service';
import { ItemCarrinhoController } from './item_carrinho.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemCarrinho } from './entities/item_carrinho.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemCarrinho])],
  controllers: [ItemCarrinhoController],
  providers: [ItemCarrinhoService],
})
export class ItemCarrinhoModule {}
