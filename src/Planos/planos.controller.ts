import { Body, Controller, Delete, Get, Headers, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/auth/shared/auth.service';
import { JtwAuthGuard } from 'src/auth/shared/jtw-auth.guard';
import { CreatePlanosDto } from './dto/create-planos.dto';
import { UpdatePlanosDto } from './dto/update-planos.dto';
import { Plano } from './shared/planos';
import { PlanosService } from './shared/planos.service'

@Controller('planos')
export class PlanosController {
    constructor(
        private authService: AuthService,
        private planosService: PlanosService,
    ){}

    @UseGuards(JtwAuthGuard)
    @Get()
    async getAll(
        @Headers('Authorization') auth: string
    ): Promise<Plano[]> {
        const jwt = auth.replace('Bearer ', '');
        const json = this.authService.decode(jwt);

        
        return this.planosService.getAll((await json).studio);
    }


    @UseGuards(JtwAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: string): Promise<Plano>{
        return this.planosService.getById(id);
    }

    @UseGuards(JtwAuthGuard)
    @Post()
    async create(@Body() CreatePlanosDto: CreatePlanosDto): Promise<Plano>{
        return this.planosService.create(CreatePlanosDto)
    }

    @UseGuards(JtwAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() UpdatePlanosDto: UpdatePlanosDto): Promise<Plano>{
        return this.planosService.update(id , UpdatePlanosDto);
    }

    @UseGuards(JtwAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string){
        this.planosService.delete(id)
    }

}