import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Client } from './Client';
import { Person } from './utils/Person';
@Entity()
export class Transaction extends Person {
  @Column()
  balance: number;
  @ManyToOne(() => Client, (client) => client.transactions) 
  client: Client;
}

//another concept is join column and join table .
//need to implement that soon by taking help of documentation .
