import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Conta } from './conta.entity';

@Entity()
export class Credito {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tipo: 'empreendimento' | 'pessoal';  // Tipo de crédito

  @Column('decimal', { precision: 10, scale: 2 })
  valor: number;

  @Column('date')
  dataConcessao: Date;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  saldoDevedor: number;

  @ManyToOne(() => Conta, (conta) => conta.creditos)
  conta: Conta;
}
