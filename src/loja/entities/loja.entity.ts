import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Endereco } from '../../endereco/entities/endereco.entity';
// import { Estabelecimento } from '../../estabelecimento/entities/estabelecimento.entity';

@Entity()
export class Loja {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column()
  senha: string;

  @Column()
  telefone: string;

  @Column({ unique: true })
  cpf: string;

  @Column({ default: true })
  ativo: boolean;

  @Column({ nullable: true })
  fotoPerfil: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataCadastro: Date;

  @OneToOne(() => Endereco, endereco => endereco.loja)
  @JoinColumn()
  endereco: Endereco;

//   @OneToMany(() => Estabelecimento, estabelecimento => estabelecimento.dono)
//   estabelecimentos: Estabelecimento[];
}