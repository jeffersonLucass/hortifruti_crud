import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Usuario } from "../../usuarios/entities/usuario.entity";

@Entity('enderecos')
export class Endereco {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rua: string;

    @Column()
    numero: string;

    @Column()
    bairro: string;

    @Column({ nullable: true })
    complemento?: string;

    @ManyToOne(() => Usuario, (usuario) => usuario.enderecos)
    usuario: Usuario;
}
