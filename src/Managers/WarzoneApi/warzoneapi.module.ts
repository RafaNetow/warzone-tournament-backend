
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WarzoneApiService } from './waronzeapi.service';
import { WarzoneApiController } from './warzoneapi.controller';


@Module({
    providers: [WarzoneApiService],
    controllers: [WarzoneApiController],
    exports: [WarzoneApiService]
})
export class WarzoneApiModule { }