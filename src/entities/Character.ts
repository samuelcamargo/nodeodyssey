import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Role } from "../enum/RoleEnum";
import { User } from "./User";

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
  agility!: number;

  @Column({
    type: "text",
    enum: Role,
    default: Role.Guerreiro,
  })
  role!: string;

  @ManyToOne(() => User, (user) => user.characters, { eager: true }) // 'eager: true' carrega os dados do User automaticamente
  @JoinColumn({ name: "id_user" }) // Relaciona com a coluna 'id_user' no banco de dados
  user!: User;
}