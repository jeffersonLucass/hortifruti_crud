import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, HttpCode } from '@nestjs/common';
import { PagamentoService } from './pagamento.service';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { UpdatePagamentoDto } from './dto/update-pagamento.dto';

@Controller('pagamento')
export class PagamentoController {
  constructor(private readonly pagamentoService: PagamentoService) {}

  @Post()
  create(@Body() createPagamentoDto: CreatePagamentoDto) {
    return this.pagamentoService.create(createPagamentoDto);
  }

  @Get()
  findAll() {
    return this.pagamentoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const pagamento = await this.pagamentoService.findOne(id);
    if (!pagamento) throw new NotFoundException();
    return pagamento;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePagamentoDto: UpdatePagamentoDto,
  ) {
    const pagamento = await this.pagamentoService.update(id, updatePagamentoDto);
    if (!pagamento) throw new NotFoundException();
    return pagamento;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const pagamento = await this.pagamentoService.remove(id);
    if (!pagamento) throw new NotFoundException();
  }
}
