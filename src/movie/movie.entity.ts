import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'movie' })
export class MovieEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column({ default: 0 })
	yearReleased: number;

	@Column()
	runtime: string;

	@Column()
	genre: string;

	@Column()
	imdbRating: number;
}