import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'movie' })
export class MovieEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column({ default: '' })
  released: string;

  @ApiProperty()
  @Column()
  runtime: string;

  @ApiProperty()
  @Column()
  genre: string;

  @ApiProperty()
  @Column()
  imdbRating: number;
}
