import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemCarrinhoDto } from './dto/create-item_carrinho.dto';
import { UpdateItemCarrinhoDto } from './dto/update-item_carrinho.dto';
import { ItemCarrinho } from './entities/item_carrinho.entity';

@Injectable()
export class ItemCarrinhoService {

  constructor(
    @InjectRepository(ItemCarrinho)
    private readonly repository: Repository<ItemCarrinho>,
  ) {}

  create(dto: CreateItemCarrinhoDto) {
    const itemCarrinho = this.repository.create(dto);
    return this.repository.save(itemCarrinho);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdateItemCarrinhoDto) {
    const itemCarrinho = await this.repository.findOneBy({ id });
    if (!itemCarrinho) return null;
    this.repository.merge(itemCarrinho, dto);
    return this.repository.save(itemCarrinho);
  }

  async remove(id: string) {
    const itemCarrinho = await this.repository.findOneBy({ id });
    if (!itemCarrinho) return null;
    return this.repository.remove(itemCarrinho);
  }
}
