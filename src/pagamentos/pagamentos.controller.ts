

import { Body, Controller, Delete, Get, Headers, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/auth/shared/auth.service';
import { Pagamentos } from './shared/pagamentos';
import { PagamentosService } from './shared/pagamentos.service';
import { JtwAuthGuard } from '../auth/shared/jtw-auth.guard';
import { CreatePagamentosDto } from './dto/create-pagamentos.dto';
import { UpdatePagamentos } from './dto/update-pagamentos.dto';

@Controller('pagamentos')
export class PagamentosController { 
    constructor(
        private authService: AuthService,
        private pagamentosService: PagamentosService,
    ) {}

    @UseGuards(JtwAuthGuard)
    @Get()
    async getAll(
        @Headers('Authorization') auth: string
    ): Promise<Pagamentos[]> {
        const jwt = auth.replace('Bearer ', '');
        const json = this.authService.decode(jwt);

        
        return this.pagamentosService.getAll((await json).studio);
    }

    @UseGuards(JtwAuthGuard)
    @Get('/search/:searchText')
    async getSearch(
        @Headers('Authorization') auth: string,@Param('searchText') searchText: string
    ): Promise<Pagamentos[]> {
        const jwt = auth.replace('Bearer ', '');
        const json = this.authService.decode(jwt);

        console.log(json)
        return this.pagamentosService.getSearch((await json).studio,searchText);
    }

    @UseGuards(JtwAuthGuard)
    @Get('/summary')
    async getsummary(@Headers('Authorization') auth: string) {
        const jwt = auth.replace('Bearer ', '');
        const json = this.authService.decode(jwt);

        console.log(json)
        return this.pagamentosService.getSummary((await json).studio);
    }

    @UseGuards(JtwAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: string): Promise<Pagamentos> {
        return this.pagamentosService.getById(id);
    }


    @UseGuards(JtwAuthGuard)
    @Post()
    async create(@Body() createPagamentosDto: CreatePagamentosDto): Promise<Pagamentos> {

    return this.pagamentosService.create(createPagamentosDto)
    }

    @UseGuards(JtwAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() updatePagamentos: UpdatePagamentos): Promise<Pagamentos> {
       
        return this.pagamentosService.update(id, updatePagamentos);
    }

    @UseGuards(JtwAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.pagamentosService.delete(id);
    }
}
