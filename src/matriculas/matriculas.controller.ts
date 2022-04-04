import { Body, Controller, Delete, Get, Headers, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthService } from '../auth/shared/auth.service';
import { JtwAuthGuard } from 'src/auth/shared/jtw-auth.guard';
import { CreateMatriculasDto } from './dto/create-matriculas.dto';
import { UpdateMatriculasDto } from './dto/update-Matriculas.dto';
import { Matricula } from './shared/Matriculas';
import { MatriculasService } from './shared/matriculas.service'

@Controller('matriculas')
export class MatriculasController {
    constructor(
        private authService: AuthService, 
        private matriculasService: MatriculasService,
    ) { }

    @UseGuards(JtwAuthGuard)
    @Get()
    async getAll(
        @Headers('Authorization') auth: string
    ): Promise<Matricula[]> {
        const jwt = auth.replace('Bearer ', '');
        const json = this.authService.decode(jwt);


        return this.matriculasService.getAll((await json).studio);
    }


    @UseGuards(JtwAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: string): Promise<Matricula> {
        return this.matriculasService.getById(id);
    }

    @UseGuards(JtwAuthGuard)
    @Post()
    async create(@Body() createMatriculasDto: CreateMatriculasDto): Promise<Matricula> {
        return this.matriculasService.create(createMatriculasDto)
    }

    @UseGuards(JtwAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateMatriculasDto: UpdateMatriculasDto): Promise<Matricula> {
        return this.matriculasService.update(id, updateMatriculasDto);
    }

    @UseGuards(JtwAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.matriculasService.delete(id)
    }

}