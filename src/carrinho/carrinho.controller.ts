import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, HttpCode } from '@nestjs/common';
import { CarrinhoService } from './carrinho.service';
import { CreateCarrinhoDto } from './dto/create-carrinho.dto';
import { UpdateCarrinhoDto } from './dto/update-carrinho.dto';

@Controller('carrinho')
export class CarrinhoController {
  constructor(private readonly carrinhoService: CarrinhoService) {}

  @Post()
  create(@Body() createCarrinhoDto: CreateCarrinhoDto) {
    return this.carrinhoService.create(createCarrinhoDto);
  }

  @Get()
  findAll() {
    return this.carrinhoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const carrinho = await this.carrinhoService.findOne(id);
    if (!carrinho) throw new NotFoundException()
    return carrinho
  }

  @Patch(':id')
  async update(
    @Param('id') id: string, 
    @Body() updateCarrinhoDto: UpdateCarrinhoDto
  ){
    const carrinho = await this.carrinhoService.update(id, updateCarrinhoDto);
    if (!carrinho) throw new NotFoundException()
    return carrinho
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const carrinho = await this.carrinhoService.remove(id);
    if (!carrinho) throw new NotFoundException()
  }
}