import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, NotFoundException, UseGuards } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtosService.create(createProdutoDto);
  }

  @Get()
  findAll() {
    return this.produtosService.findAll();
  }

@Get(':id')
  async findOne(@Param('id') id: string) {
    const produtos = await this.produtosService.findOne(id);
    if (!produtos) throw new NotFoundException()
    return produtos
  }

  @Patch(':id')
  async update(
    @Param('id') id: string, 
    @Body() updateProdutoDto: UpdateProdutoDto
  ){
    const produtos = await this.produtosService.update(id, updateProdutoDto);
    if (!produtos) throw new NotFoundException()
    return produtos
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const produtos = await this.produtosService.remove(id);
    if (!produtos) throw new NotFoundException()
  }
}
