import { BeforeInsert, Column, Entity, PrimaryColumn, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Usuario } from "../../usuarios/entities/usuario.entity";
import { Pagamento } from "../../pagamento/entities/pagamento.entity";
import { Entrega } from "../../entrega/entities/entrega.entity";
const { nanoid } = require("nanoid");

@Entity('pedido')
export class Pedido {

    @PrimaryColumn()
    id: string;

    @ManyToOne(() => Usuario, (usuario) => usuario.pedidos)
    usuario: Usuario;

    @Column()
    data_hora: Date;

    @Column()
    status: string;

    @Column()
    valor_total: number;

    @OneToOne(() => Pagamento)
    @JoinColumn()
    pagamento: Pagamento;

    @OneToOne(() => Entrega)
    @JoinColumn()
    entrega: Entrega;

    @BeforeInsert()
    generateId() {
        this.id = `pedido_${nanoid()}`;
    }
}