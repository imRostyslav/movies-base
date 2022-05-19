import { IsNumber, IsString } from 'class-validator';

export class MovieInfoResponseDto {

  @IsString()
  readonly Title: string;

  @IsString()
  readonly Released: string;

  @IsString()
  readonly Runtime: string;

  @IsString()
  readonly Genre: string;

  @IsNumber()
  readonly imdbRating: number;
}
