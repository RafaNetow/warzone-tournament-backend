import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { Tournament } from './tournament.entity';


@Injectable()
export class TournamentService {
    constructor(
        @InjectRepository(Tournament)
        private readonly CoursesRepository: Repository<Tournament>,
    ) { }

    async create(createCourseDto: CreateTournamentDto): Promise<Tournament> {
        let tournament = new Tournament();
        tournament.name = createCourseDto.name;
        tournament.pointPerKil = createCourseDto.pointPerKil;
        tournament.type = createCourseDto.type;
        return this.CoursesRepository.save(tournament);
    }

    async findAll(): Promise<Tournament[]> {
        return this.CoursesRepository.find();
    }

    findOne(id: string): Promise<Tournament> {
        return this.CoursesRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.CoursesRepository.delete(id);
    }
}