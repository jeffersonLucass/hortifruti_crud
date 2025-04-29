import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, HttpCode } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';

@Controller('endereco')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService) {}

  @Post()
  create(@Body() createEnderecoDto: CreateEnderecoDto) {
    return this.enderecoService.create(createEnderecoDto);
  }

  @Get()
  findAll() {
    return this.enderecoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const endereco = await this.enderecoService.findOne(id);
    if (endereco === null || endereco === undefined) throw new NotFoundException();
    return endereco;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEnderecoDto: UpdateEnderecoDto
  ) {
    const endereco = await this.enderecoService.update(id, updateEnderecoDto);
    if (!endereco) throw new NotFoundException();
    return endereco;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const endereco = await this.enderecoService.remove(id);
    if (endereco === null || endereco === undefined) throw new NotFoundException();
  }
}