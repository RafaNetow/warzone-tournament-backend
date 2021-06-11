import { ApiProperty } from '@nestjs/swagger';

export class CreateTournamentDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    type: string;

    @ApiProperty()
    pointPerKil: Number;

    
    
}