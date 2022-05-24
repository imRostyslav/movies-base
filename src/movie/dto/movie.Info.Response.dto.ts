import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class MovieInfoResponseDto {

  @ApiProperty()
  @IsString()
  readonly Title: string;

  @ApiProperty()
  @IsString()
  readonly Released: string;

  @ApiProperty()
  @IsString()
  readonly Runtime: string;

  @ApiProperty()
  @IsString()
  readonly Genre: string;

  @ApiProperty()
  @IsString()
  readonly imdbRating: string;
}
