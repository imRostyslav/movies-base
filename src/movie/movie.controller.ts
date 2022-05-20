import { Controller, Delete, Get, Param, Put, Query, Req } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { GetMovieInfoDto } from './dto/get.Movie.Info.dto';
import { MovieEntity } from './movie.entity';
import { MovieService } from './movie.service';


@Controller()
export class MovieController {
  constructor(private readonly movieService: MovieService) { }

  @Get('movie')
  @ApiResponse({ status: 200, description: 'The found movie' })
  @ApiResponse({ status: 404, description: 'Movie not found' })
  findInfo(@Query() params: GetMovieInfoDto) {
    const movieData = this.movieService.getMovieInfo(params.title);
    return movieData;
  }
  @Get('movies')
  @ApiResponse({ status: 201, description: 'The data has been successfully received.' })
  @ApiResponse({ status: 403, description: 'No data.' })
  getAllMovies(): Promise<MovieEntity[]> {
    return this.movieService.getAllMovies();
  }
  @Delete(':id')
  @ApiResponse({ status: 201, description: 'The movie has been successfully deleted.' })
  @ApiResponse({ status: 403, description: 'No record with this ID was found' })
  deleteMovieById(@Param('id') id: number): Promise<DeleteResult> {
    return this.movieService.deleteMovieById(id);
  }
}
