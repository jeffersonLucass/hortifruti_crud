import { BeforeInsert, Column, Entity, PrimaryColumn, OneToMany ,BeforeUpdate, OneToOne, JoinColumn} from "typeorm";
import { Endereco } from "../../endereco/entities/endereco.entity";
import { Pedido } from "../../pedidos/entities/pedido.entity";
import { Carrinho } from "../../carrinho/entities/carrinho.entity";
import { Avaliacao } from "../../avaliacao/entities/avaliacao.entity";
import * as bcrypt from "bcrypt";
const { nanoid } = require("nanoid");

export enum UserRole {
    USER = 'USER',
    MANAGER = 'MANAGER',
    ADMIN = 'ADMIN',
}

@Entity('usuarios')
export class Usuario {
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @Column()
    telefone: string;

    @OneToMany(() => Pedido, (pedido) => pedido.usuario)
    pedidos: Pedido[];

    @OneToMany(() => Carrinho, (carrinho) => carrinho.usuario)
    carrinhos: Carrinho[];

    @OneToMany(() => Avaliacao, (avaliacao) => avaliacao.usuario)
    avaliacoes: Avaliacao[];

    @OneToOne(() => Endereco, (endereco) => endereco.usuario)
    @JoinColumn()
    endereco: Endereco;

    @Column({
        type: 'varchar',
        default: UserRole.USER
    })
    role: UserRole;

    @BeforeInsert()
    generateId() {
        this.id = `dev_${nanoid()}`;
    }
    
    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        if(this.senha) {
            this.senha = await bcrypt.hash(this.senha, 10);
        }
      
    }

}