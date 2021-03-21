  
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentService } from './tournament.service';
import { CoursesController } from './tournament.controller';
import { Tournament } from './tournament.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Tournament])],
    providers: [TournamentService],
    controllers: [CoursesController],
    exports: [TournamentService]
})
export class CoursesModule { }