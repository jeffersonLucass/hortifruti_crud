import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Endereco } from '../../endereco/entities/endereco.entity';

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

  @Column({ nullable: true })
  telefone: string;

  @Column({ nullable: true })
  nome_fantasia: string;

  @Column({ nullable: true })
  razao_social: string;

  @Column({ nullable: true })
  cnpj: string;

  @Column({ nullable: true })
  complemento: string;

  @Column({ nullable: true })
  status: string;
}
