import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
const { nanoid } = require("nanoid");

@Entity('pedido')
export class Pedido {

    @PrimaryColumn()
    id: string;

    @Column()
    usuario_id: string;

    @Column()
    data_hora: Date;

    @Column()
    status: string;

    @Column()
    valor_total: number;

    @Column()
    pagamento_id: string;

    @BeforeInsert()
    generateId() {
        this.id = `pedido_${nanoid()}`;
    }
}
