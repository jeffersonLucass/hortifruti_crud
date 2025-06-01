import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne, OneToMany } from 'typeorm'; 
import { Cidade } from '../../cidade/entities/cidade.entity';
import { Loja } from '../../loja/entities/loja.entity';
import { Entrega } from '../../entrega/entities/entrega.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity'; 

@Entity('enderecos')
export class Endereco {
  @PrimaryGeneratedColumn('uuid') 
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
  @JoinColumn({ name: 'cidadeId' })
  cidade: Cidade;

  @OneToOne(() => Usuario, usuario => usuario.endereco)
  @JoinColumn()
  usuario: Usuario;

  @Column({ nullable: false })
  cidadeId: string;

  @OneToMany(() => Entrega, entrega => entrega.enderecoDestino)
  entregas: Entrega[];
}