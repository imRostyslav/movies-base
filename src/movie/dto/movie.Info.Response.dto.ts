import { IsNumber, IsString } from 'class-validator';

export class MovieInfoResponseDto {

  @IsString()
  readonly Title: string;

  @IsNumber()
  readonly YearReleased: number;

  @IsString()
  readonly Runtime: string;

  @IsString()
  readonly Genre: string;

  @IsNumber()
  readonly ImdbRating: number;
}
