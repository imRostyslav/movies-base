import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateMovieTable1652894493990 implements MigrationInterface {
    name = 'CreateMovieTable1652894493990'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`movie\` CHANGE \`time\` \`runtime\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`movie\` DROP COLUMN \`runtime\``);
        await queryRunner.query(`ALTER TABLE \`movie\` ADD \`runtime\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`movie\` DROP COLUMN \`runtime\``);
        await queryRunner.query(`ALTER TABLE \`movie\` ADD \`runtime\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`movie\` CHANGE \`runtime\` \`time\` varchar(255) NOT NULL`);
    }

}
