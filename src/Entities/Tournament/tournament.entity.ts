import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Tournament {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

}