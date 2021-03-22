  
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { Tournament } from './tournament.entity';
import { TournamentService } from './tournament.service';


@Controller('Tournament')
export class TournamentsController {
    constructor(private readonly coursesService: TournamentService) { }

    @Post()
    create(@Body() createTournamentDto: CreateTournamentDto): Promise<Tournament> {
        return this.coursesService.create(createTournamentDto);
    }

    @Get()
    findAll(): Promise<Tournament[]> {
        return this.coursesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Tournament> {
        return this.coursesService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.coursesService.remove(id);
    }
}