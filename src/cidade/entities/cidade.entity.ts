import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
const { nanoid } = require("nanoid");

@Entity('cidades')
export class Cidade {

    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column({ length: 9 }) // CEP no formato '00000-000'
    cep: string;

    @BeforeInsert()
    generateId() {
        this.id = `dev_${nanoid()}`;
    }
}
