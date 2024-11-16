import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Character } from "./entities/Character";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "db/database.sqlite",
  synchronize: false, // Usaremos migrações
  logging: true,
  entities: [User, Character],
  migrations: ["src/migrations/*.ts"],
});