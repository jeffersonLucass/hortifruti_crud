import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UsuariosService])],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
