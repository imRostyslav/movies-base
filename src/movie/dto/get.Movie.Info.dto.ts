import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GetMovieInfoDto {
	@ApiProperty()
	@IsString()
	readonly title: string;
}