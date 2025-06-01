import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, JoinColumn, BeforeInsert } from 'typeorm';
import { Uf } from '../../uf/entities/uf.entity';
import { Endereco } from '../../endereco/entities/endereco.entity';
import { nanoid } from 'nanoid';

@Entity('cidades')
export class Cidade {
  @PrimaryColumn({ type: 'varchar', length: 255 }) 
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
    if (!this.id) {
      this.id = `dev_${nanoid()}`;
    }
  }
}