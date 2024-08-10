import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Conta } from './conta.entity';

@Entity()
export class Transacao {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal', { precision: 10, scale: 2 })
  valor: number;

  @Column()
  tipo: 'deposito' | 'saque' | 'transferencia';

  @Column({ type: 'timestamp' })
  data: Date;

  @ManyToOne(() => Conta, (conta) => conta.transacoes)
  conta: Conta;

  // Caso seja uma transferência, armazene a conta de destino
  @ManyToOne(() => Conta, { nullable: true })
  contaDestino?: Conta;
}
