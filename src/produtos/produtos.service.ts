import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from '../categorias/entities/categoria.entity';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import { Like } from 'typeorm';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private readonly repository: Repository<Produto>,
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) { }

  async create(dto: CreateProdutoDto) {
  const { categoria_id, nova_categoria, ...rest } = dto;
  let categoria: Categoria | undefined;

  if (categoria_id) {
    const categoriaEncontrada = await this.categoriaRepository.findOneBy({ id: categoria_id });
    if (!categoriaEncontrada) throw new NotFoundException('Categoria não encontrada');
    categoria = categoriaEncontrada;
  } else if (nova_categoria) {
    categoria = this.categoriaRepository.create({ nome: nova_categoria });
    await this.categoriaRepository.save(categoria);
  } else {
    throw new NotFoundException('Informe uma categoria existente ou crie uma nova.');
  }

  const produto = this.repository.create({ ...rest, categoria });
  return this.repository.save(produto);
}

  async findAll(categoriaId?: number, nome?: string) {
  const where: any = {};

  if (categoriaId) {
    where.categoria = { id: categoriaId.toString() };
  }

  if (nome) {
    where.nome = Like(`%${nome}%`);
  }

  return this.repository.find({
    where,
    relations: ['categoria'],
  });
}

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdateProdutoDto) {
  const produto = await this.repository.findOneBy({ id });
  if (!produto) return null;

  // Se vier categoria_id, busca a categoria e associa ao produto
  if ((dto as any).categoria_id) {
    const categoria = await this.categoriaRepository.findOneBy({ id: (dto as any).categoria_id });
    if (!categoria) throw new NotFoundException('Categoria não encontrada');
    this.repository.merge(produto, { ...dto, categoria });
    delete (produto as any).categoria_id; // Remove categoria_id para não tentar salvar campo inexistente
  } else {
    this.repository.merge(produto, dto);
  }

  return this.repository.save(produto);
}

  async remove(id: string) {
    const produtos = await this.repository.findOneBy({ id });
    if (!produtos) return null;
    return this.repository.remove(produtos);
  }
}
