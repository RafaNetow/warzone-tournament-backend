import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentsModule } from './Entities/Tournament/tournament.module'
import { WarzoneApiModule } from './Managers/WarzoneApi/warzoneapi.module'


@Module({
  imports: [TournamentsModule, WarzoneApiModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
