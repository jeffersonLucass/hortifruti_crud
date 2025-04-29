import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, HttpCode } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Post()
  create(@Body() createPedidoDto: CreatePedidoDto) {
    return this.pedidosService.create(createPedidoDto);
  }

  @Get()
  findAll() {
    return this.pedidosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const pedido = await this.pedidosService.findOne(id);
    if (!pedido) throw new NotFoundException();
    return pedido;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePedidoDto: UpdatePedidoDto,
  ) {
    const pedido = await this.pedidosService.update(id, updatePedidoDto);
    if (!pedido) throw new NotFoundException();
    return pedido;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const pedido = await this.pedidosService.remove(id);
    if (!pedido) throw new NotFoundException();
  }
}

