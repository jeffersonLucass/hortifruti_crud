import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, BeforeInsert  } from 'typeorm';
import { Pedido } from '../../pedidos/entities/pedido.entity';
import { Endereco } from '../../endereco/entities/endereco.entity';

import { nanoid } from 'nanoid';

export enum StatusEntrega {
  PENDENTE = 'PENDENTE',
  EM_ROTA = 'EM_ROTA',
  ENTREGUE = 'ENTREGUE',
  CANCELADA = 'CANCELADA',
}

@Entity('entregas')
export class Entrega {
  @PrimaryColumn()
  id: string;

  @Column({
    type: 'enum',
    enum: StatusEntrega,
    default: StatusEntrega.PENDENTE,
    nullable: false,
  })
  status: StatusEntrega;

  @ManyToOne(() => Pedido, (pedido) => pedido.entrega)
  pedido: Pedido;

  @Column()
  tipo: 'entrega' | 'retirada';

  @Column()
  data_entrega: string;

  @ManyToOne(() => Endereco, endereco => endereco.entregas)
  @JoinColumn({ name: 'enderecoId' }) 
  enderecoDestino: Endereco;

  @Column({ nullable: false }) 
  enderecoId: string

  @BeforeInsert()
  generateId() {
    if (!this.id) {
      this.id = `entrega_${nanoid()}`;
    }
  }
}