import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Character } from "./Character";
import { itemType } from "../enum/itemTypeEnum";

@Entity()
export class BagCharacter {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({
    type: "int",
    default: 1
  })
  level!: number;

  @Column({
    type: "int",
    default: 10
  })
  attack!: number;

  @Column({
    type: "int",
    default: 10
  })
  defense!: number;

  @Column({
    type: "int",
    default: 10
  })
  max_health!: number;

  @Column({
    type: "int",
    default: 10
  })
  agility!: number;

  @Column({
    type: "text",
    enum: itemType,
    default: itemType.Outros,
  })
  itemType!: string;

  @Column({ nullable: false })
  id_character!: number;

  @ManyToOne(() => Character, (character) => character.bagItems) // Relacionamento N-1
  @JoinColumn({ name: "id_character" }) // Chave estrangeira
  character!: Character;
}