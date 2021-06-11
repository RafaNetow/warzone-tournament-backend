
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { WarzoneApiService } from './waronzeapi.service';



@Controller('WarzoneApi')
export class WarzoneApiController {
    constructor(private readonly warzoneService: WarzoneApiService) { }


    @Get(':userid')
   async get(@Param('userid') id: string): Promise<void> {
      await this.warzoneService.getInfoUser(id);
      return null;
    }
}