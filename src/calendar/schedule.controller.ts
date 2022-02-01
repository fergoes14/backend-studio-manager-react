
import { Body, Controller, Delete, Get, Headers, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/auth/shared/auth.service';
import { JtwAuthGuard } from 'src/auth/shared/jtw-auth.guard';
import { CreateSchedulesDto } from './dto/create-schedule.dto';
import { UpdateSchedulesDto } from './dto/update-schedules.dto';
import { Schedule } from './shared/schedules';
import { SchedulesService } from './shared/schedules.service';

@Controller('schedules')
export class ScheduleController {
    constructor(
        private authService: AuthService,
        private schedulesService: SchedulesService
    ) { }

    @UseGuards(JtwAuthGuard)
    @Get()
    async getAll(
        @Headers('Authorization') auth: string
    ): Promise<Schedule[]> {
        const jwt = auth.replace('Bearer ', '');
        const json = this.authService.decode(jwt);

        console.log(json)
        return this.schedulesService.getAll((await json).studio);
    }
    @UseGuards(JtwAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: string): Promise<Schedule> {
        return this.schedulesService.getById(id);
    }
    @UseGuards(JtwAuthGuard)
    @Post()
    async create(@Body() createSchedulesDto: CreateSchedulesDto): Promise<Schedule> {
        return this.schedulesService.create(createSchedulesDto)
    }
    @UseGuards(JtwAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateSchedulesDto: UpdateSchedulesDto): Promise<Schedule> {

        return this.schedulesService.update(id, updateSchedulesDto);
    }

    @UseGuards(JtwAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.schedulesService.delete(id);
    }

}
