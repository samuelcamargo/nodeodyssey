import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Role } from "../enum/RoleEnum";
import { User } from "./User";
import { BagCharacter } from "./BagCharacter";

@Entity()
export class Character {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({
    type: "int",
    default:1
  })
  level!: number;

  @Column({
    type: "int",
    default:0
  })
  experience!: number;

  @Column({
    type: "int",
    default:10
  })
  attack!: number;

  @Column({
    type: "int",
    default:10
  })
  defense!: number;

  @Column({
    type: "int",
    default:10
  })
  health!: number;

  @Column({
    type: "int",
    default:10
  })
  max_health!: number;

  @Column({
    type: "int",
    default:10
  })
  agility!: number;

  @Column({
    type: "int",
    default:100
  })
  gold!: number;

  @Column({
    type: "text",
    enum: Role,
    default: Role.Guerreiro,
  })
  role!: string;

  @Column({ nullable: false })
  id_user!: number; // 'id_user' também deve ser obrigatório

  @ManyToOne(() => User, (user) => user.characters, { eager: true })
  @JoinColumn({ name: "id_user" })
  user!: User;

  @OneToMany(() => BagCharacter, (bagItem) => bagItem.id_character)
  bagItems!: BagCharacter;

  @Column({type: "int",default:0})
  weapon_id!: number

  @Column({type: "int",default:0})
  armor_id!: number

  @Column({type: "int",default:0})
  helmet_id!: number

  @Column({type: "int",default:0})
  boots_id!: number

  @Column({type: "int",default:0})
  pants_id!: number

  @Column({type: "int",default:0})
  ring_1_id!: number

  @Column({type: "int",default:0})
  ring_2_id!: number

  @Column({type: "int",default:0})
  amulet_id!: number

}