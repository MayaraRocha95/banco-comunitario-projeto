import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Cliente } from './cliente.entity';
import { Transacao } from './transacao.entity';
import { ContaPagar } from './conta-pagar.entity';
import { Credito } from './credito.entity';

@Entity()
export class Conta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  numeroConta: string;

  @Column()
  agencia: string;

  @Column()
  tipo: string;

  @Column('decimal', { precision: 10, scale: 2 })
  saldo: number;

  @Column()
  dataAbertura: Date;

  @Column()
  status: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  limiteCredito: number;

  @ManyToOne(() => Cliente, (cliente) => cliente.contas)
  titular: Cliente;

  @OneToMany(() => Transacao, (transacao) => transacao.conta)
  transacoes: Transacao[];

  @OneToMany(() => ContaPagar, (contaPagar) => contaPagar.conta)
  contasPagar: ContaPagar[];

  @OneToMany(() => Credito, (credito) => credito.conta)
  creditos: Credito[]; 
}
