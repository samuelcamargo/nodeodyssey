import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1731933383434 implements MigrationInterface {
    name = 'InitialMigration1731933383434'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "level" integer NOT NULL DEFAULT (1), "experience" integer NOT NULL DEFAULT (0), "attack" integer NOT NULL DEFAULT (10), "defense" integer NOT NULL DEFAULT (10), "health" integer NOT NULL DEFAULT (10), "agility" integer NOT NULL DEFAULT (10), "role" varchar CHECK( "role" IN ('guerreiro','mago','arqueiro') ) NOT NULL DEFAULT ('guerreiro'), "id_user" integer NOT NULL, "max_health" integer NOT NULL DEFAULT (10), CONSTRAINT "FK_2825420c8093e83e73c2c2e1556" FOREIGN KEY ("id_user") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_character"("id", "name", "level", "experience", "attack", "defense", "health", "agility", "role", "id_user") SELECT "id", "name", "level", "experience", "attack", "defense", "health", "agility", "role", "id_user" FROM "character"`);
        await queryRunner.query(`DROP TABLE "character"`);
        await queryRunner.query(`ALTER TABLE "temporary_character" RENAME TO "character"`);
        await queryRunner.query(`CREATE TABLE "temporary_character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "level" integer NOT NULL DEFAULT (1), "experience" integer NOT NULL DEFAULT (0), "attack" integer NOT NULL DEFAULT (10), "defense" integer NOT NULL DEFAULT (10), "health" integer NOT NULL DEFAULT (10), "agility" integer NOT NULL DEFAULT (10), "role" varchar CHECK( "role" IN ('guerreiro','mago','arqueiro') ) NOT NULL DEFAULT ('guerreiro'), "id_user" integer NOT NULL, "max_health" integer NOT NULL DEFAULT (10), CONSTRAINT "FK_2825420c8093e83e73c2c2e1556" FOREIGN KEY ("id_user") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_character"("id", "name", "level", "experience", "attack", "defense", "health", "agility", "role", "id_user", "max_health") SELECT "id", "name", "level", "experience", "attack", "defense", "health", "agility", "role", "id_user", "max_health" FROM "character"`);
        await queryRunner.query(`DROP TABLE "character"`);
        await queryRunner.query(`ALTER TABLE "temporary_character" RENAME TO "character"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "character" RENAME TO "temporary_character"`);
        await queryRunner.query(`CREATE TABLE "character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "level" integer NOT NULL DEFAULT (1), "experience" integer NOT NULL DEFAULT (0), "attack" integer NOT NULL DEFAULT (10), "defense" integer NOT NULL DEFAULT (10), "health" integer NOT NULL DEFAULT (10), "agility" integer NOT NULL DEFAULT (10), "role" varchar CHECK( "role" IN ('guerreiro','mago','arqueiro') ) NOT NULL DEFAULT ('guerreiro'), "id_user" integer NOT NULL, "max_health" integer NOT NULL DEFAULT (10), CONSTRAINT "FK_2825420c8093e83e73c2c2e1556" FOREIGN KEY ("id_user") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "character"("id", "name", "level", "experience", "attack", "defense", "health", "agility", "role", "id_user", "max_health") SELECT "id", "name", "level", "experience", "attack", "defense", "health", "agility", "role", "id_user", "max_health" FROM "temporary_character"`);
        await queryRunner.query(`DROP TABLE "temporary_character"`);
        await queryRunner.query(`ALTER TABLE "character" RENAME TO "temporary_character"`);
        await queryRunner.query(`CREATE TABLE "character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "level" integer NOT NULL DEFAULT (1), "experience" integer NOT NULL DEFAULT (0), "attack" integer NOT NULL DEFAULT (10), "defense" integer NOT NULL DEFAULT (10), "health" integer NOT NULL DEFAULT (10), "agility" integer NOT NULL DEFAULT (10), "role" varchar CHECK( "role" IN ('guerreiro','mago','arqueiro') ) NOT NULL DEFAULT ('guerreiro'), "id_user" integer NOT NULL, CONSTRAINT "FK_2825420c8093e83e73c2c2e1556" FOREIGN KEY ("id_user") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "character"("id", "name", "level", "experience", "attack", "defense", "health", "agility", "role", "id_user") SELECT "id", "name", "level", "experience", "attack", "defense", "health", "agility", "role", "id_user" FROM "temporary_character"`);
        await queryRunner.query(`DROP TABLE "temporary_character"`);
    }

}
