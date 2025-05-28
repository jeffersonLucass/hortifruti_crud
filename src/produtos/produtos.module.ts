import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity';
import { AuthModule } from 'src/auth/auth.module';
import { Categoria } from 'src/categorias/entities/categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produto,Categoria]),AuthModule],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule {}
