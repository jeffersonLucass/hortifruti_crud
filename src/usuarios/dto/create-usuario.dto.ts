import { isEmail, isString } from "class-validator";

export class CreateUsuarioDto {
    
    @isString()
    nome: string;
    
    @isEmail()
    email: string;
    
    @isString()
    senha: string;
    
    @isString()
    telefone: string;

    @isString()
    endereco:string;


}
