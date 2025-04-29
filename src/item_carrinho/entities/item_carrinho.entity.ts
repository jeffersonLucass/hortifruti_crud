import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
const { nanoid } = require("nanoid");

@Entity('item_carrinho')
export class ItemCarrinho {

    @PrimaryColumn()
    id: string;

    @Column()
    carrinho_id: string;

    @Column()
    produto_id: string;

    @Column()
    quantidade: number;

    @Column()
    subtotal: number;

    @BeforeInsert()
    generateId() {
        this.id = `item_${nanoid()}`;
    }
}
