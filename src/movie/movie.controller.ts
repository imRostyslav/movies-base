import { Controller, Delete, Get, Param, Put, Query, Req } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
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
    return this.movieService.getAllMovies();
  }
  @Delete(':id')
  deleteMovieById(@Param('id') id: number): Promise<DeleteResult> {
    return this.movieService.deleteMovieById(id);
  }
}
