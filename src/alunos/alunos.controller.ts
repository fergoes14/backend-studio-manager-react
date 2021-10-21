import { Body, Controller, Delete, Get, Headers, Param, Post, Put, Req, UseGuards, Injectable, UsePipes, HttpException, HttpStatus } from '@nestjs/common';
import { Aluno } from './shared/alunos';
import { AlunosService } from './shared/alunos.service';
import { JtwAuthGuard } from '../auth/shared/jtw-auth.guard';
import { AuthService } from 'src/auth/shared/auth.service';
import { CreateAlunosDto } from './dto/create-alunos.dto';
import { UpdateAlunosDto } from './dto/update-alunos.dto';



@Controller('alunos')
export class AlunosController {
    constructor(
        private authService: AuthService,
        private alunosServices: AlunosService
    ) { }

    @UseGuards(JtwAuthGuard)
    @Get()
    async getAll(
        @Headers('Authorization') auth: string
    ): Promise<Aluno[]> {
        const jwt = auth.replace('Bearer ', '');
        const json = this.authService.decode(jwt);

        console.log(json)
        return this.alunosServices.getAll((await json).studio);
    }

    @UseGuards(JtwAuthGuard)
    @Get('/validtoken')
    async getValidToken(){
        
        return {'token': true};
    }

    @UseGuards(JtwAuthGuard)
    @Get('/search/:searchText')
    async getSearch(
        @Headers('Authorization') auth: string,@Param('searchText') searchText: string
    ): Promise<Aluno[]> {
        const jwt = auth.replace('Bearer ', '');
        const json = this.authService.decode(jwt);

        console.log(json)
        return this.alunosServices.getSearch((await json).studio,searchText);
    }

    @UseGuards(JtwAuthGuard)
    @Get('/summary')
    async getsummary(@Headers('Authorization') auth: string) {
        const jwt = auth.replace('Bearer ', '');
        const json = this.authService.decode(jwt);

        console.log(json)
        return this.alunosServices.getsummary((await json).studio);
    }

    @UseGuards(JtwAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: string): Promise<Aluno> {
        return this.alunosServices.getById(id);
    }

    @UseGuards(JtwAuthGuard)
    @Post()
     async create(@Body() createAlunoDto: CreateAlunosDto): Promise<Aluno> {


        if (createAlunoDto.status == "Ativo") {
            createAlunoDto.ativo = 1
            createAlunoDto.inativo = 0

        } else {
            createAlunoDto.ativo = 0
            createAlunoDto.inativo = 1
        }



        return this.alunosServices.create(createAlunoDto)


    }

    @UseGuards(JtwAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateAlunosDto: UpdateAlunosDto): Promise<Aluno> {
        if (updateAlunosDto.status == "Ativo") {
            updateAlunosDto.ativo = 1
            updateAlunosDto.inativo = 0
        } else {
            updateAlunosDto.ativo = 0
            updateAlunosDto.inativo = 1
        }
        return this.alunosServices.update(id, updateAlunosDto);
    }

    @UseGuards(JtwAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.alunosServices.delete(id);
    }




}


