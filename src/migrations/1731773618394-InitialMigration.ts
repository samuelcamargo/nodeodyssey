import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1731773618394 implements MigrationInterface {
    name = 'InitialMigration1731773618394'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "login" varchar NOT NULL, "senha" varchar NOT NULL, CONSTRAINT "UQ_a62473490b3e4578fd683235c5e" UNIQUE ("login"))`);
        await queryRunner.query(`CREATE TABLE "character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "level" integer NOT NULL DEFAULT (1), "attack" integer NOT NULL DEFAULT (10), "defense" integer NOT NULL DEFAULT (10), "health" integer NOT NULL DEFAULT (10), "agility" integer NOT NULL DEFAULT (10), "role" varchar CHECK( "role" IN ('guerreiro','mago','arqueiro') ) NOT NULL DEFAULT ('guerreiro'), "id_user" integer NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "character"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
