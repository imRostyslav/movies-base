import { MovieInfoResponseDto } from 'src/movie/dto/movie.Info.Response.dto';
import { MovieEntity } from 'src/movie/movie.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(MovieEntity)
export class MovieRepository extends Repository<MovieEntity>{
	getAllMovies(): Promise<MovieEntity[]> {
		return this.find();
	}
	// 	async saveMovie(movie: MovieInfoResponseDto): Promise<MovieInfoResponseDto> {
	// 		const newMovie = new MovieEntity();

	// 		return await this.save(newMovie);
	// 	}
}
