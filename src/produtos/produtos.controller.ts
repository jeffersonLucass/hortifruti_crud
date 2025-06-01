import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, NotFoundException, UseGuards, Query, Request } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserRole } from 'src/usuarios/entities/usuario.entity';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) { }

  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.USER, UserRole.ADMIN)
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtosService.create(createProdutoDto);
  }

  @Get()
  findAll(@Request() req, @Query('categoria') categoria?: string) {
    const categoriaId = categoria ? parseInt(categoria, 10) : undefined;
    return this.produtosService.findAll(categoriaId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const produtos = await this.produtosService.findOne(id);
    if (!produtos) throw new NotFoundException()
    return produtos
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.MANAGER)
  async update(
    @Param('id') id: string,
    @Body() updateProdutoDto: UpdateProdutoDto
  ) {
    const produtos = await this.produtosService.update(id, updateProdutoDto);
    if (!produtos) throw new NotFoundException()
    return produtos
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.ADMIN)
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const produtos = await this.produtosService.remove(id);
    if (!produtos) throw new NotFoundException()
  }
}
