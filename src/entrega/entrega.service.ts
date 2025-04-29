import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEntregaDto } from './dto/create-entrega.dto';
import { UpdateEntregaDto } from './dto/update-entrega.dto';
import { Entrega } from './entities/entrega.entity';

@Injectable()
export class EntregaService {
  constructor(
    @InjectRepository(Entrega)
    private readonly entregaRepository: Repository<Entrega>,
  ) {}

  async create(createEntregaDto: CreateEntregaDto): Promise<Entrega> {
    const entrega = this.entregaRepository.create(createEntregaDto);
    return await this.entregaRepository.save(entrega);
  }

  async findAll(): Promise<Entrega[]> {
    return await this.entregaRepository.find();
  }

  async findOne(id: string): Promise<Entrega> {
    const entrega = await this.entregaRepository.findOne({ where: { id } });
    if (!entrega) {
      throw new NotFoundException(`Entrega com ID ${id} não encontrada`);
    }
    return entrega;
  }

  async update(id: string, updateEntregaDto: UpdateEntregaDto): Promise<Entrega> {
    const entrega = await this.findOne(id);
    Object.assign(entrega, updateEntregaDto);
    return await this.entregaRepository.save(entrega);
  }

  async remove(id: string): Promise<void> {
    const entrega = await this.findOne(id);
    await this.entregaRepository.remove(entrega);
  }
}