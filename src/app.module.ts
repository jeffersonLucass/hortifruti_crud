import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProdutosModule } from './produtos/produtos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { ItemCarrinhoModule } from './item_carrinho/item_carrinho.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { PagamentoModule } from './pagamento/pagamento.module';
import { EnderecoModule } from './endereco/endereco.module';
import { EntregaModule } from './entrega/entrega.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CidadeModule } from './cidade/cidade.module';
import { UfModule } from './uf/uf.module';
import { LojaModule } from './loja/loja.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),UsuariosModule, ProdutosModule, CategoriasModule, CarrinhoModule, ItemCarrinhoModule, PedidosModule, PagamentoModule, EnderecoModule, EntregaModule, AvaliacaoModule,AuthModule, CidadeModule, UfModule, LojaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

