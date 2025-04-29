import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, HttpCode } from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';

@Controller('avaliacao')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) {}

  @Post()
  create(@Body() createAvaliacaoDto: CreateAvaliacaoDto) {
    return this.avaliacaoService.create(createAvaliacaoDto);
  }

  @Get()
  findAll() {
    return this.avaliacaoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const avaliacao = await this.avaliacaoService.findOne(id);
    if (!avaliacao) throw new NotFoundException(`Avaliação com ID ${id} não encontrada`);
    return avaliacao;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAvaliacaoDto: UpdateAvaliacaoDto) {
    const avaliacao = await this.avaliacaoService.update(id, updateAvaliacaoDto);
    if (!avaliacao) throw new NotFoundException(`Avaliação com ID ${id} não encontrada`);
    return avaliacao;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const avaliacao = await this.avaliacaoService.remove(id);
    if (avaliacao === null || avaliacao === undefined) throw new NotFoundException(`Avaliação com ID ${id} não encontrada`);
  }
}