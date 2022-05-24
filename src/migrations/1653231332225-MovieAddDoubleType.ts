import { MigrationInterface, QueryRunner } from 'typeorm';

export class MovieAddFloatType1653231332225 implements MigrationInterface {
  name = 'MovieAddFloatType1653231332225';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`movie\` DROP COLUMN \`imdbRating\``);
    await queryRunner.query(
      `ALTER TABLE \`movie\` ADD \`imdbRating\` double(4,2) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`movie\` DROP COLUMN \`imdbRating\``);
    await queryRunner.query(
      `ALTER TABLE \`movie\` ADD \`imdbRating\` float(4,2) NOT NULL`,
    );
  }
}
