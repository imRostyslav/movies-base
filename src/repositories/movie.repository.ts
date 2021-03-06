import { MovieInfoResponseDto } from 'src/movie/dto/movie.Info.Response.dto';
import { MovieEntity } from 'src/movie/movie.entity';
import { DeleteResult, EntityRepository, Repository } from 'typeorm';

@EntityRepository(MovieEntity)
export class MovieRepository extends Repository<MovieEntity> {
  getAllMovies(): Promise<MovieEntity[]> {
    return this.find();
  }
  saveMovie(movie: MovieInfoResponseDto): Promise<MovieEntity> {
    const newMovie = new MovieEntity();
    newMovie.genre = movie.Genre;
    newMovie.imdbRating = parseFloat(movie.imdbRating);
    console.log(newMovie.imdbRating);
    newMovie.runtime = movie.Runtime;
    newMovie.title = movie.Title;
    newMovie.released = movie.Released;
    return this.save(newMovie);
  }
  deleteMovieById(id: number): Promise<DeleteResult> {
    return this.delete(id);
  }
}
