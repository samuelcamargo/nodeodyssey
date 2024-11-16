import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Character } from "./Character";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  login!: string;

  @Column({ select: false })
  senha!: string;

  @OneToMany(() => Character, (character: { user: any; }) => character.user)
  characters!: Character[];
}
