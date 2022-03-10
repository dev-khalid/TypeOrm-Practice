import {Entity,Column, PrimaryGeneratedColumn} from 'typeorm'; 
@Entity('test_table')
export class Test {
  @PrimaryGeneratedColumn() 
  id: number; 

  @Column() 
  test_field: string; 

}