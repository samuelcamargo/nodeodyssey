import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Character } from "./entities/Character";
import { BagCharacter } from "./entities/BagCharacter";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "db/database.sqlite",
  synchronize: false, // Usaremos migrações
  logging: true,
  entities: [User, Character, BagCharacter],
  migrations: ['src/migrations/*.ts'],
});