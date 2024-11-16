import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "db/database.sqlite",
  synchronize: false, // Usaremos migrações
  logging: true,
  entities: [User],
  migrations: ["src/migrations/*.ts"],
});