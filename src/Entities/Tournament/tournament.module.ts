  
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentService } from './tournament.service';
import { TournamentsController } from './tournament.controller';
import { Tournament } from './tournament.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Tournament])],
    providers: [TournamentService],
    controllers: [TournamentsController],
    exports: [TournamentService]
})
export class TournamentsModule { }