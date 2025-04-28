import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm"
const{nanoid} = require("nanoid")


@Entity('produtos')
export class Produto { 
    
    @PrimaryColumn()
    id: string

    @Column()
    nome: string

    @Column()
    descricao: string

    @Column()
    preco: number

    @Column()
    categoria_id: string

    @Column()
    estoque: number

    @BeforeInsert()
	generateId() {
        this.id = `dev_${nanoid()}`;;
	}
}
