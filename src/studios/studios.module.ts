import { StudiosService } from './shared/studios.service';
import { StudiosController } from './studios.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { studiosSchema } from './schemas/studios.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{name:'Studios' , schema:studiosSchema}])
    ],
    controllers: [
        StudiosController,],
    providers: [
        StudiosService,],
})
export class StudiosModule { }
