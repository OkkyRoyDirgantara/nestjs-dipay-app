import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CombinationService } from './combination.service';
import { CreateCombinationDto } from './dto/create-combination.dto';
import { UpdateCombinationDto } from './dto/update-combination.dto';

@Controller('api/combination')
export class CombinationController {
  constructor(private readonly combinationService: CombinationService) {}

  @Post()
  async create(@Body() data: any) {
    try {
      return this.combinationService.create(data);
    }catch (e) {
      return {
        "status": 400,
        "code": "400",
        "data": null,
        "message": e.message
      }
    }
  }

  // @Get()
  // findAll() {
  //   return this.combinationService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.combinationService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCombinationDto: UpdateCombinationDto) {
  //   return this.combinationService.update(+id, updateCombinationDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.combinationService.remove(+id);
  // }
}
