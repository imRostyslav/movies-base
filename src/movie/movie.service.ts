import { Injectable, NotFoundException } from "@nestjs/common";
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { MovieInfoResponseDto } from './dto/movie.Info.Response.dto';
import { ConfigService } from '@nestjs/config';
import { MovieRepository } from 'src/repositories/movie.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from "./movie.entity";
import { DeleteResult } from 'typeorm';

@Injectable()
export class MovieService {
  private readonly API_KEY: string;
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
    @InjectRepository(MovieRepository, 'default')
    private movieRepository: MovieRepository,
  ) {
    this.API_KEY = this.configService.get<string>('API_KEY');
  }
  async getMovieInfo(title: string): Promise<MovieInfoResponseDto> {
    const { data } = await firstValueFrom(
      this.httpService.get(`/?t=${title}&apikey=${this.API_KEY}`),
    );
    await this.movieRepository.saveMovie(data);
    return data;
  }

  getAllMovies(): Promise<MovieEntity[]> {
    return this.movieRepository.getAllMovies();
  }

  async deleteMovieById(id: number): Promise<DeleteResult> {
    const deleteResult = await this.movieRepository.deleteMovieById(id);
    if (deleteResult.affected) {
      console.log(`The movie ID:${id} has been deleted`);
    } else {
      console.log(`The movie ID:${id} not found`);
      throw new NotFoundException(`The movie ID:${id} not found`);
    }
    return deleteResult;
  }
}
