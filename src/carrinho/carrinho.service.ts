import { Injectable } from '@nestjs/common';
import { CreateCarrinhoDto } from './dto/create-carrinho.dto';
import { UpdateCarrinhoDto } from './dto/update-carrinho.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrinho } from './entities/carrinho.entity';

@Injectable()
export class CarrinhoService {

  constructor(
    @InjectRepository(Carrinho)
    private readonly repository: Repository<Carrinho>,
  ){}

  create(dto: CreateCarrinhoDto) {
    const carrinho = this.repository.create(dto);
    return this.repository.save(carrinho);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdateCarrinhoDto) {
    const carrinho = await this.repository.findOneBy({ id });
    if (!carrinho) return null;
    this.repository.merge(carrinho, dto);
    return this.repository.save(carrinho);
  }

  async remove(id: string) {
    const carrinho = await this.repository.findOneBy({ id });
    if (!carrinho) return null;
    return this.repository.remove(carrinho);
  }
}
