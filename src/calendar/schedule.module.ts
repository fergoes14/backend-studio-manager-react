import { ScheduleController } from './schedule.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { SchedulesService } from './shared/schedules.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleSchema } from './schemas/schedules.schema';
import { AuthService } from 'src/auth/shared/auth.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [
        AuthModule,
        MongooseModule.forFeature([{name:'Schedules' , schema:ScheduleSchema}])
    ],
    controllers: [
        ScheduleController,],
    providers: [
        SchedulesService,
    ],
})
export class ScheduleModule { }
