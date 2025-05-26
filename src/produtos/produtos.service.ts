import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutosService {
  constructor(
      @InjectRepository(Produto)
      private readonly repository: Repository<Produto>,
    ){}
  
  create(dto: CreateProdutoDto) {
    const produtos = this.repository.create(dto);
    return this.repository.save(produtos);
  }
  
  async findAll(categoriaId?: number) {
    if (categoriaId) {
      return this.repository.find({
        where: {
          categoria: {
            id: categoriaId.toString(), // converte para string
          },
        },
        relations: ['categoria'],
      });
    }
  
    return this.repository.find({
      relations: ['categoria'],
    });
  }
  
  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }
  
  async update(id: string, dto: UpdateProdutoDto) {
    const produtos = await this.repository.findOneBy({ id });
    if (!produtos) return null;
    this.repository.merge(produtos, dto);
    return this.repository.save(produtos);
  }
  
  async remove(id: string) {
    const produtos = await this.repository.findOneBy({ id });
    if (!produtos) return null;
    return this.repository.remove(produtos);
  }
}
