import { Injectable } from '@nestjs/common';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cidade } from './entities/cidade.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CidadeService {
  constructor(
    @InjectRepository(Cidade)
    private readonly repository: Repository<Cidade>,
  ) {}

  create(dto: CreateCidadeDto) {
    const cidade = this.repository.create(dto);
    return this.repository.save(cidade);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdateCidadeDto) {
    const cidade = await this.repository.findOneBy({ id });
    if (!cidade) return null;
    this.repository.merge(cidade, dto);
    return this.repository.save(cidade);
  }

  async remove(id: string) {
    const cidade = await this.repository.findOneBy({ id });
    if (!cidade) return null;
    return this.repository.remove(cidade);
  }
}
