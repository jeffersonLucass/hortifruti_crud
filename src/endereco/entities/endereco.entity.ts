// src/endereco/entities/endereco.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne, OneToMany } from 'typeorm'; // Adicione OneToMany
import { Cidade } from '../../cidade/entities/cidade.entity'; // Caminho relativo ajustado para o seu projeto
import { Loja } from '../../loja/entities/loja.entity'; // Importa a entidade Loja
import { Entrega } from '../../entrega/entities/entrega.entity'; // Importa a entidade Entrega

@Entity('enderecos')
export class Endereco {
  @PrimaryGeneratedColumn('uuid') // Mantive UUID aqui, já que o Endereco pode não ter geração de ID customizada
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

  // Relacionamento Many-to-One com Cidade
  @ManyToOne(() => Cidade, cidade => cidade.enderecos)
  @JoinColumn({ name: 'cidadeId' })
  cidade: Cidade;

  @Column({ nullable: false })
  cidadeId: string;

  // --- NOVO RELACIONAMENTO: Um Endereço pode ser o destino de várias Entregas ---
  @OneToMany(() => Entrega, entrega => entrega.enderecoDestino)
  entregas: Entrega[];
}