import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasService {
  constructor(
      @InjectRepository(Categoria)
      private readonly repository: Repository<Categoria>,
    ){}
  
  create(dto: CreateCategoriaDto) {
    const categorias = this.repository.create(dto);
    return this.repository.save(categorias);
  }
  
  findAll() {
    return this.repository.find();
  }
  
  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }
  
  async update(id: string, dto: UpdateCategoriaDto) {
    const categorias = await this.repository.findOneBy({ id });
    if (!categorias) return null;
    this.repository.merge(categorias, dto);
    return this.repository.save(categorias);
  }
  
  async remove(id: string) {
    const categorias = await this.repository.findOneBy({ id });
    if (!categorias) return null;
    return this.repository.remove(categorias);
  }
}
