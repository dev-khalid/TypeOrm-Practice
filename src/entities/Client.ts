import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { Person } from './utils/Person';
import { Banker } from './Banker';
import { Transaction } from './Transaction';
@Entity()
export class Client extends Person {
  @Column({
    type: 'numeric',
  })
  balance: number;
  @Column({
    default: true,
    name: 'active',
  })
  isActive: boolean;
  @Column({
    type: 'simple-json',
    nullable: true,
  })
  additionalInfo: {
    age: number;
    hairColor: string;
  };
  @Column({ type: 'simple-array', default: [] })
  familyMembers: string[];
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  //client can have many banker connected with him .
  @ManyToMany(() => Banker, {
    cascade: true,
  })
  bankers: Banker[];
  //client can have many transaction associated with him
  @OneToMany(() => Transaction, (transaction) => transaction.client)
  transactions: Transaction[];
}
