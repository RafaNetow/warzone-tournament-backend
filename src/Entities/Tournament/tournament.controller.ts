  
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { Tournament } from './tournament.entity';
import { TournamentService } from './tournament.service';


@Controller('course')
export class TournamentsController {
    constructor(private readonly coursesService: TournamentService) { }

    @Post()
    create(@Body() createCourseDto: CreateTournamentDto): Promise<Tournament> {
        return this.coursesService.create(createCourseDto);
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