import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Client } from './Client';
import { Person } from './utils/Person';
export enum TransactionType { 
  DEPOSIT = 'DEPOSIT', 
  WITHDRAW='WIDTHDRAW',
}
@Entity()
export class Transaction extends Person {
  @Column()
  balance: number;
  @Column({
    type: 'enum', 
    enum: TransactionType
  }) 
  type: TransactionType; 
  @ManyToOne(() => Client, (client) => client.transactions)
  @JoinColumn()
  client: Client;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}

//another concept is join column and join table .
//need to implement that soon by taking help of documentation .
