import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
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

    @BeforeInsert()
    generateId() {
        this.id = `pagamento_${nanoid()}`;
    }
}
