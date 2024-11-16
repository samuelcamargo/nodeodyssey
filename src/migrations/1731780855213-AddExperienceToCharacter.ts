import { MigrationInterface, QueryRunner } from "typeorm";

export class AddExperienceToCharacter1731780855213 implements MigrationInterface {
    name = 'AddExperienceToCharacter1731780855213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "level" integer NOT NULL DEFAULT (1), "attack" integer NOT NULL DEFAULT (10), "defense" integer NOT NULL DEFAULT (10), "health" integer NOT NULL DEFAULT (10), "agility" integer NOT NULL DEFAULT (10), "role" varchar CHECK( "role" IN ('guerreiro','mago','arqueiro') ) NOT NULL DEFAULT ('guerreiro'), "id_user" integer, "experience" integer NOT NULL DEFAULT (0), CONSTRAINT "FK_2825420c8093e83e73c2c2e1556" FOREIGN KEY ("id_user") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_character"("id", "name", "level", "attack", "defense", "health", "agility", "role", "id_user", "experience") SELECT "id", "name", "level", "attack", "defense", "health", "agility", "role", "id_user", "experience" FROM "character"`);
        await queryRunner.query(`DROP TABLE "character"`);
        await queryRunner.query(`ALTER TABLE "temporary_character" RENAME TO "character"`);
        await queryRunner.query(`CREATE TABLE "temporary_character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "level" integer NOT NULL DEFAULT (1), "attack" integer NOT NULL DEFAULT (10), "defense" integer NOT NULL DEFAULT (10), "health" integer NOT NULL DEFAULT (10), "agility" integer NOT NULL DEFAULT (10), "role" varchar CHECK( "role" IN ('guerreiro','mago','arqueiro') ) NOT NULL DEFAULT ('guerreiro'), "id_user" integer, "experience" integer NOT NULL DEFAULT (0), CONSTRAINT "FK_2825420c8093e83e73c2c2e1556" FOREIGN KEY ("id_user") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_character"("id", "name", "level", "attack", "defense", "health", "agility", "role", "id_user", "experience") SELECT "id", "name", "level", "attack", "defense", "health", "agility", "role", "id_user", "experience" FROM "character"`);
        await queryRunner.query(`DROP TABLE "character"`);
        await queryRunner.query(`ALTER TABLE "temporary_character" RENAME TO "character"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "character" RENAME TO "temporary_character"`);
        await queryRunner.query(`CREATE TABLE "character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "level" integer NOT NULL DEFAULT (1), "attack" integer NOT NULL DEFAULT (10), "defense" integer NOT NULL DEFAULT (10), "health" integer NOT NULL DEFAULT (10), "agility" integer NOT NULL DEFAULT (10), "role" varchar CHECK( "role" IN ('guerreiro','mago','arqueiro') ) NOT NULL DEFAULT ('guerreiro'), "id_user" integer, "experience" integer NOT NULL DEFAULT (0), CONSTRAINT "FK_2825420c8093e83e73c2c2e1556" FOREIGN KEY ("id_user") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "character"("id", "name", "level", "attack", "defense", "health", "agility", "role", "id_user", "experience") SELECT "id", "name", "level", "attack", "defense", "health", "agility", "role", "id_user", "experience" FROM "temporary_character"`);
        await queryRunner.query(`DROP TABLE "temporary_character"`);
        await queryRunner.query(`ALTER TABLE "character" RENAME TO "temporary_character"`);
        await queryRunner.query(`CREATE TABLE "character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "level" integer NOT NULL DEFAULT (1), "attack" integer NOT NULL DEFAULT (10), "defense" integer NOT NULL DEFAULT (10), "health" integer NOT NULL DEFAULT (10), "agility" integer NOT NULL DEFAULT (10), "role" varchar CHECK( "role" IN ('guerreiro','mago','arqueiro') ) NOT NULL DEFAULT ('guerreiro'), "id_user" integer, "experience" integer NOT NULL DEFAULT (0), CONSTRAINT "FK_2825420c8093e83e73c2c2e1556" FOREIGN KEY ("id_user") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "character"("id", "name", "level", "attack", "defense", "health", "agility", "role", "id_user", "experience") SELECT "id", "name", "level", "attack", "defense", "health", "agility", "role", "id_user", "experience" FROM "temporary_character"`);
        await queryRunner.query(`DROP TABLE "temporary_character"`);
    }

}
