import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Character {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  level!: number;

  @Column()
  role!: string;

  @Column()
  id_user!: number;
}