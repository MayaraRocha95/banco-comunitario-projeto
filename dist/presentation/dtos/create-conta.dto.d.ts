export declare class CreateContaDto {
    clienteId: string;
    tipo: 'corrente' | 'poupanca';
    saldoInicial: number;
    agencia: string;
    limiteCredito?: number;
}
