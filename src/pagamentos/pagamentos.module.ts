import { PagamentosController } from './pagamentos.controller';
import { PagamentosService } from './shared/pagamentos.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';

import { MongooseModule } from '@nestjs/mongoose';
import { PagamentosSchema } from './schemas/pagamentos.schema';


@Module({
    imports: [
        AuthModule,
        MongooseModule.forFeature([{name:'Pagamentos', schema:PagamentosSchema}])
    ],
    controllers: [
        PagamentosController,],
    providers: [
        PagamentosService,],
})
export class PagamentosModule { }
