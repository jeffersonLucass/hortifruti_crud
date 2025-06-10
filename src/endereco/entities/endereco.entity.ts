import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, OneToOne, OneToMany, BeforeInsert } from 'typeorm'; 
import { Cidade } from '../../cidade/entities/cidade.entity';
import { Loja } from '../../loja/entities/loja.entity';
import { Entrega } from '../../entrega/entities/entrega.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity'; 

import { nanoid } from 'nanoid';

@Entity('enderecos')
export class Endereco {

  @PrimaryColumn()
  id: string;

  @Column({ length: 255, nullable: false })
  logradouro: string;

  @Column({ length: 20, nullable: true })
  numero: string;

  @Column({ length: 255, nullable: true })
  complemento: string;

  @Column({ length: 100, nullable: false })
  bairro: string;

  @Column({ length: 9, nullable: false })
  cep: string;

  @ManyToOne(() => Cidade, cidade => cidade.enderecos)
  @JoinColumn()
  cidade: Cidade;

  @OneToOne(() => Usuario, usuario => usuario.endereco)
  @JoinColumn({ name: 'usuarioId'})
  usuario: Usuario;

  @OneToOne(() => Loja, loja => loja.endereco)
  @JoinColumn()
  loja: Loja;

  @Column({ nullable: false })
  cidadeId: string;

  @OneToMany(() => Entrega, entrega => entrega.enderecoDestino)
  entregas: Entrega[];

  @BeforeInsert()
    generateId() {
      if (!this.id) {
        this.id = `entrega_${nanoid()}`;
      }
  }
}