import { MatriculasController } from './matriculas.controller';
import { MatriculasService } from './shared/matriculas.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MatriculasSchema } from './schemas/matriculas.schema';

@Module({
    imports: [
        AuthModule,
        MongooseModule.forFeature([{name:'Matriculas', schema:MatriculasSchema}])
    ],
    controllers: [
        MatriculasController,],
    providers: [
        MatriculasService,],
})
export class MatriculasModule { }
