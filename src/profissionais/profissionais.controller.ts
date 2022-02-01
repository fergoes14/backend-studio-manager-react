

import { Body, Controller, Delete, Get, Headers, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/auth/shared/auth.service';
import { Profissionais } from './shared/profissionais';
import { ProfissionaisService } from './shared/profissionais.service';
import { JtwAuthGuard } from '../auth/shared/jtw-auth.guard';
import { CreateProfissionalDto } from './dto/create-profisional.dto';
import { UpdateProfissionais } from './dto/update-profisional.dto';

@Controller('profissionais')
export class ProfissionaisController { 
    constructor(
        private authService: AuthService,
        private profissionaisService: ProfissionaisService,
    ) {}

    @UseGuards(JtwAuthGuard)
    @Get()
    async getAll(
        @Headers('Authorization') auth: string
    ): Promise<Profissionais[]> {
        const jwt = auth.replace('Bearer ', '');
        const json = this.authService.decode(jwt);

        
        return this.profissionaisService.getAll((await json).studio);
    }

    @UseGuards(JtwAuthGuard)
    @Get('/search/:searchText')
    async getSearch(
        @Headers('Authorization') auth: string,@Param('searchText') searchText: string
    ): Promise<Profissionais[]> {
        const jwt = auth.replace('Bearer ', '');
        const json = this.authService.decode(jwt);

        console.log(json)
        return this.profissionaisService.getSearch((await json).studio,searchText);
    }

    @UseGuards(JtwAuthGuard)
    @Get('/summary')
    async getsummary(@Headers('Authorization') auth: string) {
        const jwt = auth.replace('Bearer ', '');
        const json = this.authService.decode(jwt);

        console.log(json)
        return this.profissionaisService.getSummary((await json).studio);
    }

    @UseGuards(JtwAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: string): Promise<Profissionais> {
        return this.profissionaisService.getById(id);
    }


    @UseGuards(JtwAuthGuard)
    @Post()
    async create(@Body() createProfissionalDto: CreateProfissionalDto): Promise<Profissionais> {

        if(createProfissionalDto.status == "Ativo"){
            createProfissionalDto.ativo = 1
            createProfissionalDto.inativo = 0
        }else{
            createProfissionalDto.ativo = 0
            createProfissionalDto.inativo = 1
        }

    return this.profissionaisService.create(createProfissionalDto)
    }

    @UseGuards(JtwAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateProfissionais: UpdateProfissionais): Promise<Profissionais> {
        if (updateProfissionais.status == "Ativo") {
            updateProfissionais.ativo = 1
            updateProfissionais.inativo = 0
        } else {
            updateProfissionais.ativo = 0
            updateProfissionais.inativo = 1
        }
        return this.profissionaisService.update(id, updateProfissionais);
    }

    @UseGuards(JtwAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.profissionaisService.delete(id);
    }
}
