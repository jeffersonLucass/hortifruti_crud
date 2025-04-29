import { BeforeInsert, Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Usuario } from "../../usuarios/entities/usuario.entity";
import { ItemCarrinho } from "../../item_carrinho/entities/item_carrinho.entity";
const { nanoid } = require("nanoid");

@Entity('carrinho')
export class Carrinho {

    @PrimaryColumn()
    id: string;

    @ManyToOne(() => Usuario, (usuario) => usuario.carrinhos)
    usuario: Usuario;

    @OneToMany(() => ItemCarrinho, (itemCarrinho) => itemCarrinho.carrinho)
    itens: ItemCarrinho[];

    @Column()
    total: number;

    @BeforeInsert()
    generateId() {
        this.id = `dev_${nanoid()}`;
    }
}