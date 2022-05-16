import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateMovieTable1652720393060 implements MigrationInterface {
    name = 'CreateMovieTable1652720393060'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`movie\` CHANGE \`runtime\` \`time\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`movie\` DROP COLUMN \`time\``);
        await queryRunner.query(`ALTER TABLE \`movie\` ADD \`time\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`movie\` DROP COLUMN \`time\``);
        await queryRunner.query(`ALTER TABLE \`movie\` ADD \`time\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`movie\` CHANGE \`time\` \`runtime\` varchar(255) NOT NULL`);
    }

}
