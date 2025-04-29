import { BeforeInsert, Column, Entity, PrimaryColumn, OneToMany } from "typeorm";
import { Produto } from "../../produtos/entities/produto.entity";
const { nanoid } = require("nanoid");

@Entity('categorias')
export class Categoria {

    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @OneToMany(() => Produto, (produto) => produto.categoria)
    produtos: Produto[];

    @BeforeInsert()
    generateId() {
        this.id = `dev_${nanoid()}`;
    }
}