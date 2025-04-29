import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, HttpCode } from '@nestjs/common';
import { ItemCarrinhoService } from './item_carrinho.service';
import { CreateItemCarrinhoDto } from './dto/create-item_carrinho.dto';
import { UpdateItemCarrinhoDto } from './dto/update-item_carrinho.dto';

@Controller('item-carrinho')
export class ItemCarrinhoController {
  constructor(private readonly itemCarrinhoService: ItemCarrinhoService) {}

  @Post()
  create(@Body() createItemCarrinhoDto: CreateItemCarrinhoDto) {
    return this.itemCarrinhoService.create(createItemCarrinhoDto);
  }

  @Get()
  findAll() {
    return this.itemCarrinhoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const itemCarrinho = await this.itemCarrinhoService.findOne(id);
    if (!itemCarrinho) throw new NotFoundException();
    return itemCarrinho;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateItemCarrinhoDto: UpdateItemCarrinhoDto,
  ) {
    const itemCarrinho = await this.itemCarrinhoService.update(id, updateItemCarrinhoDto);
    if (!itemCarrinho) throw new NotFoundException();
    return itemCarrinho;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const itemCarrinho = await this.itemCarrinhoService.remove(id);
    if (!itemCarrinho) throw new NotFoundException();
  }
}
