import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { Endereco } from './entities/endereco.entity';

@Injectable()
export class EnderecoService {
  constructor(
    @InjectRepository(Endereco)
    private readonly enderecoRepository: Repository<Endereco>,
  ) {}

  async create(createEnderecoDto: CreateEnderecoDto): Promise<Endereco> {
    const endereco = this.enderecoRepository.create(createEnderecoDto);
    return await this.enderecoRepository.save(endereco);
  }

  async findAll(): Promise<Endereco[]> {
    return await this.enderecoRepository.find();
  }

  async findOne(id: string): Promise<Endereco> {
    const endereco = await this.enderecoRepository.findOne({ where: { id: Number(id) } });
    if (!endereco) {
      throw new NotFoundException(`Endereço com ID ${id} não encontrado`);
    }
    return endereco;
  }

  async update(id: string, updateEnderecoDto: UpdateEnderecoDto): Promise<Endereco> {
    const endereco = await this.findOne(id);
    Object.assign(endereco, updateEnderecoDto);
    return await this.enderecoRepository.save(endereco);
  }

  async remove(id: string): Promise<void> {
    const endereco = await this.findOne(id);
    await this.enderecoRepository.remove(endereco);
  }
}