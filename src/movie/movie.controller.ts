import { Controller, Get, Query, Req } from '@nestjs/common';
import { GetMovieInfoDto } from './dto/get.Movie.Info.dto';
import { MovieInfoResponseDto } from './dto/movie.Info.Response.dto';
import { MovieService } from './movie.service';


@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) { }

  @Get()
  findInfo(@Query() params: GetMovieInfoDto) {
    const movieData = this.movieService.getMovieInfo(params.title);

    return movieData;
  }
}
