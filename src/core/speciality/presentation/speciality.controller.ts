import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { SpecialityService } from '../application/speciality.service';
import { CreateSpecialityDto } from '../domain/dto/create-speciality.dto';
import { IBaseController } from 'src/common/interfaces/base-controller.interface';
import { UpdateSpecialityDto } from '../domain/dto/update-speciality.dto';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { ReadAllSpecialityDto } from '../domain/dto/read-all-speciality.dto';
import { FrontendSpeciality } from '../domain/types/speciality.frontend';

@Controller('speciality')
export class SpecialityController implements IBaseController<FrontendSpeciality> {
  constructor(private readonly specialityService: SpecialityService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createSpecialityDto: CreateSpecialityDto): Promise<FrontendSpeciality> {
    const speciality = await this.specialityService.create(createSpecialityDto);
    return new FrontendSpeciality(speciality);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async readAll(@Query() readAllOptions: ReadAllSpecialityDto): Promise<ReadAllResult<FrontendSpeciality>> {
    const { pagination, sorting, ...filters } = readAllOptions;
    const specialties = await this.specialityService.readAll({ pagination, sorting, filters });
    return {
      totalRecordsNumber: specialties.totalRecordsNumber,
      records: specialties.records.map((record) => new FrontendSpeciality(record)),
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async readById(@Param('id') id: string): Promise<FrontendSpeciality> {
    const speciality = await this.specialityService.readById(id);
    return new FrontendSpeciality(speciality);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() updateSpecialityDto: UpdateSpecialityDto): Promise<FrontendSpeciality> {
    const speciality = await this.specialityService.update(id, updateSpecialityDto);
    return new FrontendSpeciality(speciality);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    await this.specialityService.delete(id);
  }
}
