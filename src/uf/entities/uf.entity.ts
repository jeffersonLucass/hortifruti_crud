import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Cidade } from '../../cidade/entities/cidade.entity'; // Importa a entidade Cidade

@Entity('ufs') // Nome da tabela no banco de dados
export class Uf {
  @PrimaryGeneratedColumn('uuid') // Ou 'increment' se preferir IDs numéricos
  id: string;

  @Column({ length: 50, unique: true, nullable: false })
  nome: string;

  @Column({ length: 2, unique: true, nullable: false })
  sigla: string;

  // Um UF pode ter várias Cidades
  @OneToMany(() => Cidade, cidade => cidade.uf)
  cidades: Cidade[];
}