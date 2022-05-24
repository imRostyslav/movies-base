import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GetMovieInfoDto {
	@IsString()
	@ApiProperty()
	readonly title: string;
}