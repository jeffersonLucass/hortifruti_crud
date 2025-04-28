import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm"
const { nanoid } = require("nanoid")

@Entity('carrinho')
export class Carrinho {

    @PrimaryColumn()
    id: string

    @Column()
    usuario_id:string
    
    @Column()
    total:number

    @BeforeInsert()
    generateId(){
        this.id = `dev_${nanoid()}`
    }
}
