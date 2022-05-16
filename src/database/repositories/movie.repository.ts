import { MovieEntity } from 'src/movie/movie.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(MovieEntity)
export class MovieRepository extends Repository<MovieEntity>{
	async getAllMovies(): Promise<MovieEntity[]> {
		return await this.find();
	}
	async saveMovie(movie: MovieEntity): Promise<MovieEntity> {
		return await this.save(movie);
	}
}
