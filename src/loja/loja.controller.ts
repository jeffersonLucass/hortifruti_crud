import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, NotFoundException } from '@nestjs/common';
import { LojaService } from './loja.service';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';

@Controller('loja')
export class LojaController {
  constructor(private readonly lojaService: LojaService) {}

  @Post()
  create(@Body() createLojaDto: CreateLojaDto) {
    return this.lojaService.create(createLojaDto);
  }

  @Get()
  findAll() {
    return this.lojaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const loja = await this.lojaService.findOne(id);
    if (!loja) throw new NotFoundException();
    return loja;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateLojaDto: UpdateLojaDto
  ) {
    const loja = await this.lojaService.update(id, updateLojaDto);
    if (!loja) throw new NotFoundException();
    return loja;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const loja = await this.lojaService.remove(id);
    if (!loja) throw new NotFoundException();
  }
}
