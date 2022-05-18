import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateMovieTable1652887705879 implements MigrationInterface {
    name = 'CreateMovieTable1652887705879'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`movie\` CHANGE \`yearReleased\` \`yearReleased\` int NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`movie\` CHANGE \`yearReleased\` \`yearReleased\` int NOT NULL`);
    }

}
