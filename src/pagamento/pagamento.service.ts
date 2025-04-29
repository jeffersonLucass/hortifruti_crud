import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { UpdatePagamentoDto } from './dto/update-pagamento.dto';
import { Pagamento } from './entities/pagamento.entity';

@Injectable()
export class PagamentoService {
  constructor(
    @InjectRepository(Pagamento)
    private readonly repository: Repository<Pagamento>,
  ) {}

  create(dto: CreatePagamentoDto) {
    const pagamento = this.repository.create(dto);
    return this.repository.save(pagamento);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdatePagamentoDto) {
    const pagamento = await this.repository.findOneBy({ id });
    if (!pagamento) return null;
    this.repository.merge(pagamento, dto);
    return this.repository.save(pagamento);
  }

  async remove(id: string) {
    const pagamento = await this.repository.findOneBy({ id });
    if (!pagamento) return null;
    return this.repository.remove(pagamento);
  }
}
