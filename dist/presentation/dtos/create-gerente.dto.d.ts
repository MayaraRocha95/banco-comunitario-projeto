export declare class CreateGerenteDto {
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    endereco: string;
    dataInicio: Date;
    status: 'ativo' | 'inativo';
    departamento: string;
    nivelAcesso: string;
}
