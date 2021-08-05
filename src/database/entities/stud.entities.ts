  
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('studentdetails')
export class StudEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
  
  @Column()
  name: string;

  @Column()
  class: string;

  @Column()
  course: string;

  @Column()
  roll_no: string;
}