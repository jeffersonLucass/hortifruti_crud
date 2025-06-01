import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { RolesGuard } from './roles.guard';

@Module({
  imports: [
    UsuariosModule,
    TypeOrmModule.forFeature([Usuario]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secretKey', // chave segura em produção
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, JwtStrategy, UsuariosService, RolesGuard],
  controllers: [AuthController],
  exports: [JwtStrategy, PassportModule, RolesGuard],
})
export class AuthModule { }
