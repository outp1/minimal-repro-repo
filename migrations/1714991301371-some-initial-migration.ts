import { MigrationInterface, QueryRunner } from "typeorm";

export class SomeInitialMigration1714991301371 implements MigrationInterface {
    name = 'SomeInitialMigration1714991301371'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "equipment" ("id" SERIAL NOT NULL, "brand" character varying NOT NULL, "modelName" character varying NOT NULL, CONSTRAINT "UQ_a63184766dbcb868e298d72d6fe" UNIQUE ("modelName"), CONSTRAINT "PK_0722e1b9d6eb19f5874c1678740" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "equipment"`);
    }

}
