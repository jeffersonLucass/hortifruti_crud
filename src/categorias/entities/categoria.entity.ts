import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
const{nanoid} = require("nanoid")

@Entity('categorias')
export class Categoria {

    @PrimaryColumn()
	id : string; 
	
	@Column()
	nome: string;

    @BeforeInsert()
	generateId() {
		this.id = `dev_${nanoid()}`;;
	}
}
