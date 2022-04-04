import { SalasService } from './shared/salas.service';
import { SalasController } from './salas.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SalaSchema } from './schemas/salas.schema';

@Module({
    imports: [
        AuthModule,
        MongooseModule.forFeature([{name:'Salas' , schema:SalaSchema}])
    ],
    controllers: [
        SalasController,],
    providers: [
        SalasService,],
})
export class SalasModule { }
