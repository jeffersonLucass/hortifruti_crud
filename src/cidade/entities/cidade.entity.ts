// src/cidade/entities/cidade.entity.ts
import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, JoinColumn, BeforeInsert } from 'typeorm'; // Alterado para PrimaryColumn
import { Uf } from '../../uf/entities/uf.entity';
import { Endereco } from '../../endereco/entities/endereco.entity';
import { nanoid } from 'nanoid'; // Importação ES Modules

@Entity('cidades')
export class Cidade {
  @PrimaryColumn({ type: 'varchar', length: 255 }) // Definindo explicitamente o tipo e tamanho, já que você controla a geração
  id: string;

  @Column({ length: 100, nullable: false })
  nome: string;

  @ManyToOne(() => Uf, uf => uf.cidades)
  @JoinColumn({ name: 'ufId' })
  uf: Uf;

  @Column({ nullable: false })
  ufId: string;

  @OneToMany(() => Endereco, endereco => endereco.cidade)
  enderecos: Endereco[];

  @BeforeInsert()
  generateId() {
    if (!this.id) { // Apenas gera o ID se ele ainda não foi definido
      this.id = `dev_${nanoid()}`;
    }
  }
}