import {MigrationInterface, QueryRunner} from "typeorm";

export class MovieChangeRelisedField1652895526562 implements MigrationInterface {
    name = 'MovieChangeRelisedField1652895526562'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`movie\` CHANGE \`yearReleased\` \`released\` int NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`movie\` DROP COLUMN \`released\``);
        await queryRunner.query(`ALTER TABLE \`movie\` ADD \`released\` varchar(255) NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`movie\` DROP COLUMN \`released\``);
        await queryRunner.query(`ALTER TABLE \`movie\` ADD \`released\` int NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`movie\` CHANGE \`released\` \`yearReleased\` int NOT NULL DEFAULT '0'`);
    }

}
