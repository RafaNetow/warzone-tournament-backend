import { ApiProperty } from '@nestjs/swagger';

export class UserModelWarzone {
    @ApiProperty()
    name: string;

    @ApiProperty()
    type: string;

    @ApiProperty()
    pointPerKil: Number;


}