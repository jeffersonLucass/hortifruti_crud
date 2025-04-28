import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
const{nanoid} = require("nanoid")

@Entity('usuarios')
export class Usuario {

    @PrimaryColumn()
    id: string

    @Column()
    nome:string

    @Column()
    email:string

    @Column()
    senha:string

    @Column()
    telefone:string

    @Column()
    endereco:string

    @BeforeInsert()
    generateId() {
        this.id = `dev_${nanoid()}`;
    }   
}   