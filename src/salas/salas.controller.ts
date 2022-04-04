


import { Body, Controller, Delete, Get, Headers, Param, Post, Put, UseGuards } from '@nestjs/common';
import { get } from 'http';
import { AuthService } from 'src/auth/shared/auth.service';
import { JtwAuthGuard } from 'src/auth/shared/jtw-auth.guard';
import { CreateSalasDto } from './dto/create-salas.dto';
import { UpdateSalasDto } from './dto/update-salas.dto';
import { Sala } from './shared/salas';
import { SalasService } from './shared/salas.service';

@Controller('salas')
export class SalasController {
    constructor(
        private authService: AuthService,
        private salasService: SalasService,
    ){}

    @UseGuards(JtwAuthGuard)
    @Get()
    async getAll(
        @Headers('Authorization') auth: string
    ): Promise<Sala[]> {
        const jwt = auth.replace('Bearer ', '');
        const json = this.authService.decode(jwt);

        
        return this.salasService.getAll((await json).studio);
    }


    @UseGuards(JtwAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: string): Promise<Sala>{
        return this.salasService.getById(id);
    }

    @UseGuards(JtwAuthGuard)
    @Post()
    async create(@Body() createSalasDto: CreateSalasDto): Promise<Sala>{
        return this.salasService.create(createSalasDto)
    }

    @UseGuards(JtwAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateSalasDto: UpdateSalasDto): Promise<Sala>{
        return this.salasService.update(id , updateSalasDto);
    }

    @UseGuards(JtwAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string){
        this.salasService.delete(id)
    }

 }
