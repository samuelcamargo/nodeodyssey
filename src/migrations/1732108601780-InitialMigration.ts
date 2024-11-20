import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1732108601780 implements MigrationInterface {
    name = 'InitialMigration1732108601780'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bag_character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "level" integer NOT NULL DEFAULT (1), "attack" integer NOT NULL DEFAULT (10), "defense" integer NOT NULL DEFAULT (10), "max_health" integer NOT NULL DEFAULT (10), "agility" integer NOT NULL DEFAULT (10), "itemType" varchar CHECK( "itemType" IN ('outros','espada','machado','clava','dobleespada','adagas','cajado','varinha','arco','besta','mosquete','armadura','elmo','bota','calca','anel','amuleto','pocao') ) NOT NULL DEFAULT ('outros'), "id_character" integer NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "level" integer NOT NULL DEFAULT (1), "experience" integer NOT NULL DEFAULT (0), "attack" integer NOT NULL DEFAULT (10), "defense" integer NOT NULL DEFAULT (10), "health" integer NOT NULL DEFAULT (10), "max_health" integer NOT NULL DEFAULT (10), "agility" integer NOT NULL DEFAULT (10), "gold" integer NOT NULL DEFAULT (100), "role" varchar CHECK( "role" IN ('guerreiro','mago','arqueiro') ) NOT NULL DEFAULT ('guerreiro'), "id_user" integer NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "login" varchar NOT NULL, "senha" varchar NOT NULL, CONSTRAINT "UQ_a62473490b3e4578fd683235c5e" UNIQUE ("login"))`);
        await queryRunner.query(`CREATE TABLE "temporary_bag_character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "level" integer NOT NULL DEFAULT (1), "attack" integer NOT NULL DEFAULT (10), "defense" integer NOT NULL DEFAULT (10), "max_health" integer NOT NULL DEFAULT (10), "agility" integer NOT NULL DEFAULT (10), "itemType" varchar CHECK( "itemType" IN ('outros','espada','machado','clava','dobleespada','adagas','cajado','varinha','arco','besta','mosquete','armadura','elmo','bota','calca','anel','amuleto','pocao') ) NOT NULL DEFAULT ('outros'), "id_character" integer NOT NULL, CONSTRAINT "FK_6213d0c0ae8a1cba4f865918d73" FOREIGN KEY ("id_character") REFERENCES "character" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_bag_character"("id", "name", "level", "attack", "defense", "max_health", "agility", "itemType", "id_character") SELECT "id", "name", "level", "attack", "defense", "max_health", "agility", "itemType", "id_character" FROM "bag_character"`);
        await queryRunner.query(`DROP TABLE "bag_character"`);
        await queryRunner.query(`ALTER TABLE "temporary_bag_character" RENAME TO "bag_character"`);
        await queryRunner.query(`CREATE TABLE "temporary_character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "level" integer NOT NULL DEFAULT (1), "experience" integer NOT NULL DEFAULT (0), "attack" integer NOT NULL DEFAULT (10), "defense" integer NOT NULL DEFAULT (10), "health" integer NOT NULL DEFAULT (10), "max_health" integer NOT NULL DEFAULT (10), "agility" integer NOT NULL DEFAULT (10), "gold" integer NOT NULL DEFAULT (100), "role" varchar CHECK( "role" IN ('guerreiro','mago','arqueiro') ) NOT NULL DEFAULT ('guerreiro'), "id_user" integer NOT NULL, CONSTRAINT "FK_2825420c8093e83e73c2c2e1556" FOREIGN KEY ("id_user") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_character"("id", "name", "level", "experience", "attack", "defense", "health", "max_health", "agility", "gold", "role", "id_user") SELECT "id", "name", "level", "experience", "attack", "defense", "health", "max_health", "agility", "gold", "role", "id_user" FROM "character"`);
        await queryRunner.query(`DROP TABLE "character"`);
        await queryRunner.query(`ALTER TABLE "temporary_character" RENAME TO "character"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "character" RENAME TO "temporary_character"`);
        await queryRunner.query(`CREATE TABLE "character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "level" integer NOT NULL DEFAULT (1), "experience" integer NOT NULL DEFAULT (0), "attack" integer NOT NULL DEFAULT (10), "defense" integer NOT NULL DEFAULT (10), "health" integer NOT NULL DEFAULT (10), "max_health" integer NOT NULL DEFAULT (10), "agility" integer NOT NULL DEFAULT (10), "gold" integer NOT NULL DEFAULT (100), "role" varchar CHECK( "role" IN ('guerreiro','mago','arqueiro') ) NOT NULL DEFAULT ('guerreiro'), "id_user" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "character"("id", "name", "level", "experience", "attack", "defense", "health", "max_health", "agility", "gold", "role", "id_user") SELECT "id", "name", "level", "experience", "attack", "defense", "health", "max_health", "agility", "gold", "role", "id_user" FROM "temporary_character"`);
        await queryRunner.query(`DROP TABLE "temporary_character"`);
        await queryRunner.query(`ALTER TABLE "bag_character" RENAME TO "temporary_bag_character"`);
        await queryRunner.query(`CREATE TABLE "bag_character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "level" integer NOT NULL DEFAULT (1), "attack" integer NOT NULL DEFAULT (10), "defense" integer NOT NULL DEFAULT (10), "max_health" integer NOT NULL DEFAULT (10), "agility" integer NOT NULL DEFAULT (10), "itemType" varchar CHECK( "itemType" IN ('outros','espada','machado','clava','dobleespada','adagas','cajado','varinha','arco','besta','mosquete','armadura','elmo','bota','calca','anel','amuleto','pocao') ) NOT NULL DEFAULT ('outros'), "id_character" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "bag_character"("id", "name", "level", "attack", "defense", "max_health", "agility", "itemType", "id_character") SELECT "id", "name", "level", "attack", "defense", "max_health", "agility", "itemType", "id_character" FROM "temporary_bag_character"`);
        await queryRunner.query(`DROP TABLE "temporary_bag_character"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "character"`);
        await queryRunner.query(`DROP TABLE "bag_character"`);
    }

}
