import { BeforeInsert, Column, Entity, PrimaryColumn, ManyToOne } from "typeorm";
import { Carrinho } from "../../carrinho/entities/carrinho.entity";
import { Produto } from "../../produtos/entities/produto.entity";
const { nanoid } = require("nanoid");

@Entity('item_carrinho')
export class ItemCarrinho {

    @PrimaryColumn()
    id: string;

    @ManyToOne(() => Carrinho, (carrinho) => carrinho.itens)
    carrinho: Carrinho;

    @ManyToOne(() => Produto, (produto) => produto.itensCarrinho)
    produto: Produto;

    @Column()
    quantidade: number;

    @Column()
    subtotal: number;

    @BeforeInsert()
    generateId() {
        this.id = `item_${nanoid()}`;
    }
}