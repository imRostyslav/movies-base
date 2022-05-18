import { Controller, Get, Query, Req } from '@nestjs/common';
import { GetMovieInfoDto } from './dto/get.Movie.Info.dto';
import { MovieEntity } from './movie.entity';
import { MovieService } from './movie.service';


@Controller()
export class MovieController {
  constructor(private readonly movieService: MovieService) { }

  @Get('movie')
  findInfo(@Query() params: GetMovieInfoDto) {
    const movieData = this.movieService.getMovieInfo(params.title);
    return movieData;
  }
  @Get('movies')
  getAllMovies(): Promise<MovieEntity[]> {
    return this.getAllMovies();
  }
}
