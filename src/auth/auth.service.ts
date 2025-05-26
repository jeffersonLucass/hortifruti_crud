import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { RegisterDto, LoginDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto): Promise<Usuario> {
    const usuario = this.usuarioRepository.create(dto);
    return this.usuarioRepository.save(usuario);
  }

  async login(dto: LoginDto): Promise<{ access_token: string }> {
    const usuario = await this.usuarioRepository.findOne({
      where: { nome: dto.nome },
    });
    if (!usuario || !(await bcrypt.compare(dto.senha, usuario.senha))) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    const payload = { sub: usuario.id, nomeUsuario: usuario.nome, role: usuario.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  
  async validateusuario(nomeUsuario: string, senha: string): Promise<Usuario |
    null> {
    const usuario = await this.usuarioRepository.findOne({
      where: { nome: nomeUsuario },
    });
    if (usuario && (await bcrypt.compare(senha, usuario.senha))) {
      return usuario;
    }
    return null;
  }
}