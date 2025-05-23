import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateCidadeDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  estado: string;

  @IsString()
  @IsNotEmpty()
  @Length(9, 9)  // formato esperado do CEP: '12345-678'
  cep: string;
}
