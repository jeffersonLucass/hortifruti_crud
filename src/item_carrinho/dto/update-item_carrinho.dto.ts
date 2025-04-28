import { PartialType } from '@nestjs/mapped-types';
import { CreateItemCarrinhoDto } from './create-item_carrinho.dto';

export class UpdateItemCarrinhoDto extends PartialType(CreateItemCarrinhoDto) {}
