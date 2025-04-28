import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {

  constructor(
    @InjectRepository(Usuario)
    private readonly repository: Repository<Usuario>,
  ){}

  create(dto: CreateUsuarioDto) {
    const usuarios = this.repository.create(dto);
    return this.repository.save(usuarios);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdateUsuarioDto) {
    const usuarios = await this.repository.findOneBy({ id });
    if (!usuarios) return null;
    this.repository.merge(usuarios, dto);
    return this.repository.save(usuarios);
  }

  async remove(id: string) {
    const usuarios = await this.repository.findOneBy({ id });
    if (!usuarios) return null;
    return this.repository.remove(usuarios);
  }
}
