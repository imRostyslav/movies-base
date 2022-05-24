import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class MoviesSelectionDto {
  @IsString()
  @ApiProperty()
  readonly year: string;

  @IsString()
  @ApiProperty()
  readonly maxYear: string;

  @IsString()
  @ApiProperty()
  readonly minYear: string;

  @IsString()
  @ApiProperty()
  readonly minRating: string;

  @IsString()
  @ApiProperty()
  readonly maxRating: string;
}
