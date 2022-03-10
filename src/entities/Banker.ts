import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Client } from './Client';
import { Person } from './utils/Person';
@Entity('banker')
export class Banker extends Person {
  @Column({
    length: 10, 
    unique: true, 
  }) 
  employee_number: string; 
  @ManyToMany((type) => Client, { 
    cascade: true, 
  })
  @JoinTable({
    name: 'bankers_clients', 

  })
  clients: Client[]; 

}
