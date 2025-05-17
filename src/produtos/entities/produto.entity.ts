import { BeforeInsert, Column, Entity, PrimaryColumn, ManyToOne, OneToMany } from "typeorm";
import { Categoria } from "../../categorias/entities/categoria.entity";
import { ItemCarrinho } from "../../item_carrinho/entities/item_carrinho.entity";
import { Avaliacao } from "../../avaliacao/entities/avaliacao.entity";
const { nanoid } = require("nanoid");

@Entity('produtos')
export class Produto { 
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column('decimal', { precision: 10, scale: 2})
    preco: number;

    @Column()
    estoque: number;

    @ManyToOne(() => Categoria, (categoria) => categoria.produtos)
    categoria: Categoria;

    @OneToMany(() => ItemCarrinho, (itemCarrinho) => itemCarrinho.produto)
    itensCarrinho: ItemCarrinho[];

    @OneToMany(() => Avaliacao, (avaliacao) => avaliacao.produto)
    avaliacoes: Avaliacao[];

    @BeforeInsert()
    generateId() {
        this.id = `dev_${nanoid()}`;
    }
}