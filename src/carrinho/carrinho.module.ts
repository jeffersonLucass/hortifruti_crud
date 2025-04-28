import { Module } from '@nestjs/common';
import { CarrinhoService } from './carrinho.service';
import { CarrinhoController } from './carrinho.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrinho } from './entities/carrinho.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Carrinho])],
  controllers: [CarrinhoController],
  providers: [CarrinhoService],
})
export class CarrinhoModule {}
