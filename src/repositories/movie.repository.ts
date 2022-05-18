import { MovieInfoResponseDto } from 'src/movie/dto/movie.Info.Response.dto';
import { MovieEntity } from 'src/movie/movie.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(MovieEntity)
export class MovieRepository extends Repository<MovieEntity>{
	getAllMovies(): Promise<MovieEntity[]> {
		return this.find();
	}
	saveMovie(movie: MovieInfoResponseDto): Promise<MovieEntity> {
		const newMovie = new MovieEntity();
		newMovie.genre = movie.Genre;
		newMovie.imdbRating = movie.ImdbRating;
		newMovie.runtime = movie.Runtime;
		newMovie.title = movie.Title;
		newMovie.yearReleased = movie.YearReleased;
		return this.save(newMovie);
	}
}
