import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Cliente } from './cliente.entity';
import { Conta } from './conta.entity';

@Entity()
export class Gerente {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column()
  senha: string;

  @OneToMany(() => Cliente, (cliente) => cliente.gerente)
  clientes: Cliente[];

  @OneToMany(() => Conta, (conta) => conta.titular)
  contas: Conta[];
}
