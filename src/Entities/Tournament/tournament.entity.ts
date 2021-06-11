import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Tournament {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;


  @Column()
  type: string;

  @Column()
  pointPerKil: Number;

}