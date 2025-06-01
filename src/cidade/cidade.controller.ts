import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, NotFoundException } from '@nestjs/common';
import { CidadeService } from './cidade.service';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';

@Controller('cidade')
export class CidadeController {
  constructor(private readonly cidadeService: CidadeService) {}

  @Post()
  create(@Body() createCidadeDto: CreateCidadeDto) {
    // createCidadeDto deve conter nome, estado e cep
    return this.cidadeService.create(createCidadeDto);
  }

  @Get()
  findAll() {
    return this.cidadeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const cidade = await this.cidadeService.findOne(id);
    if (!cidade) throw new NotFoundException(`Cidade com id ${id}`)
    return cidade;
  }
}

