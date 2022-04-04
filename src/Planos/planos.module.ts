import { PlanosController } from './planos.controller';
import { PlanosService } from './shared/planos.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PlanoSchema } from './schemas/planos.schema';

@Module({
    imports: [
        AuthModule,
        MongooseModule.forFeature([{name:'Planos', schema:PlanoSchema}])
    ],
    controllers: [
        PlanosController,],
    providers: [
        PlanosService,],
})
export class PlanosModule { }
