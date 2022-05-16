import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'movie' })
export class MovieEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column()
	yearReleased: number;

	@Column()
	time: string;

	@Column()
	genre: string;

	@Column()
	imdbRating: number;
}