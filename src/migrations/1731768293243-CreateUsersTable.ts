import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersTable1731768293243 implements MigrationInterface {
    name = 'CreateUsersTable1731768293243'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "login" varchar NOT NULL, "senha" varchar NOT NULL, CONSTRAINT "UQ_a62473490b3e4578fd683235c5e" UNIQUE ("login"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
