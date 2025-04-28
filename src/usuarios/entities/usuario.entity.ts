import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";

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
        this.id = 'dev_$(nanoid())';
    }   
}