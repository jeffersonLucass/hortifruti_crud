import { Injectable } from '@nestjs/common';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Loja } from './entities/loja.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LojaService {
  constructor(
    @InjectRepository(Loja)
    private readonly repository: Repository<Loja>,
  ) {}

  create(dto: CreateLojaDto) {
    const loja = this.repository.create(dto);
    return this.repository.save(loja);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdateLojaDto) {
    const loja = await this.repository.findOneBy({ id });
    if (!loja) return null;
    this.repository.merge(loja, dto);
    return this.repository.save(loja);
  }

  async remove(id: string) {
    const loja = await this.repository.findOneBy({ id });
    if (!loja) return null;
    return this.repository.remove(loja);
  }
}
