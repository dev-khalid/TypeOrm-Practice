import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
@Entity()
export class Person extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column({
    unique: true,
  })
  email: string;
  @Column({
    length: 10,
    unique: true,
  })
  card_number: string;
}
