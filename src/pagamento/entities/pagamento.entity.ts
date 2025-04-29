import { BeforeInsert, Column, Entity, PrimaryColumn, OneToOne } from "typeorm";
import { Pedido } from "../../pedidos/entities/pedido.entity";
const { nanoid } = require("nanoid");

@Entity('pagamento')
export class Pagamento {

    @PrimaryColumn()
    id: string;

    @Column()
    tipo: string; // PIX, cartão, dinheiro

    @Column()
    status: string;

    @Column()
    data_pagamento: Date;

    @OneToOne(() => Pedido, (pedido) => pedido.pagamento)
    pedido: Pedido;

    @BeforeInsert()
    generateId() {
        this.id = `pagamento_${nanoid()}`;
    }
}