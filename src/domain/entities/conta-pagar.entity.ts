import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Conta } from './conta.entity';

@Entity()
export class ContaPagar {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  descricao: string;

  @Column('decimal', { precision: 10, scale: 2 })
  valor: number;

  @Column()
  dataVencimento: Date;

  @Column({ default: false })
  paga: boolean;

  @ManyToOne(() => Conta, (conta) => conta.contasPagar)
  conta: Conta;
}
