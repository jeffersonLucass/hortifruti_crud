import { Injectable } from '@nestjs/common';
import { CreateUfDto } from './dto/create-uf.dto';
import { UpdateUfDto } from './dto/update-uf.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Uf } from './entities/uf.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UfService {
  constructor(
    @InjectRepository(Uf)
    private readonly repository: Repository<Uf>,
  ) {}

  create(dto: CreateUfDto) {
    const uf = this.repository.create(dto);
    return this.repository.save(uf);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdateUfDto) {
    const uf = await this.repository.findOneBy({ id });
    if (!uf) return null;
    this.repository.merge(uf, dto);
    return this.repository.save(uf);
  }

  async remove(id: string) {
    const uf = await this.repository.findOneBy({ id });
    if (!uf) return null;
    return this.repository.remove(uf);
  }
}
