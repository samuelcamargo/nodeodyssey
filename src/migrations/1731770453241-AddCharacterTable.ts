import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCharacterTable1731770453241 implements MigrationInterface {
    name = 'AddCharacterTable1731770453241'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "level" integer NOT NULL, "role" varchar NOT NULL, "id_user" integer NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "character"`);
    }

}
