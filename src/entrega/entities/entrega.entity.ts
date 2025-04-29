import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Pedido } from '../../pedidos/entities/pedido.entity';

@Entity('entregas')
export class Entrega {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Pedido, (pedido) => pedido.entrega)
  pedido: Pedido;

  @Column()
  tipo: 'entrega' | 'retirada';

  @Column()
  status: string;

  @Column()
  data_entrega: string;
}