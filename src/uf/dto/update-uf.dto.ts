import { PartialType } from '@nestjs/swagger';
import { CreateUfDto } from './create-uf.dto';

export class UpdateUfDto extends PartialType(CreateUfDto) {}
