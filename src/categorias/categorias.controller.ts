import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, NotFoundException } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriasService.create(createCategoriaDto);
  }

  @Get()
  findAll() {
    return this.categoriasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const categorias = await this.categoriasService.findOne(id);
    if (!categorias) throw new NotFoundException()
    return categorias
  }
  
  @Patch(':id')
  async update(
    @Param('id') id: string, 
    @Body() updateCategoriaDto: UpdateCategoriaDto
  ){
    const categorias = await this.categoriasService.update(id, updateCategoriaDto);
    if (!categorias) throw new NotFoundException()
    return categorias
  }
  
  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const categorias = await this.categoriasService.remove(id);
    if (!categorias) throw new NotFoundException()
  }
}