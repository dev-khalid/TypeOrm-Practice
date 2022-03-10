import { Entity, PrimaryColumn, Column } from 'typeorm';
import { Person } from './utils/Person';
@Entity()
export class Banker extends Person {
  @Column()
  balance: number;
}
