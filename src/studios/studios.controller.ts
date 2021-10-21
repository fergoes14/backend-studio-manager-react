import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Studio } from './shared/studio';
import { StudiosService } from './shared/studios.service';

@Controller('studios')
export class StudiosController { 
    constructor(
        private studiosServices: StudiosService
    ){ }
    @Get()
    async getAll(): Promise<Studio[]>{
        return this.studiosServices.getAll();
    }
    @Get('id')
    async getById(@Param('id') id: string): Promise<Studio> {
        return this.studiosServices.getById(id);
    }
    @Post()
    async create(@Body() studio:Studio): Promise<Studio>{
        return this.studiosServices.create(studio)
    }
    @Put(':id')
    async update(@Param('id') id:string,@Body() studio:Studio): Promise<Studio> {
       return this.studiosServices.update(id,studio) 
    }
    @Delete(':id')
    async delete(@Param('id') id:string){
        this.studiosServices.delete(id);
    }
}
