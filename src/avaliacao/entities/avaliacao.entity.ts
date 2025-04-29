import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Produto } from '../../produtos/entities/produto.entity';

@Entity('avaliacoes')
export class Avaliacao {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.avaliacoes)
  usuario: Usuario;

  @ManyToOne(() => Produto, (produto) => produto.avaliacoes)
  produto: Produto;

  @Column()
  nota: number;

  @Column({ nullable: true })
  comentario?: string;

  @Column()
  data_avaliacao: string;
}