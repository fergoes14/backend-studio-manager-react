import { SchedulesService } from './calendar/shared/schedules.service';
import { ScheduleModule } from './calendar/schedule.module';

import { FileTesteController } from './files-test/file-teste.controller';
import { FileTestModule } from './files-test/file-test.module';
import { FilesModule } from './img/files.module';
import { ProfissionaisModule } from './profissionais/profissionais.module';
import { StudiosModule } from './studios/studios.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunosModule } from './alunos/alunos.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    ScheduleModule,
    FileTestModule,
    FilesModule,


    ProfissionaisModule,
    MongooseModule.forRoot('mongodb+srv://fergoes:141196fer@cluster0.scsd5.mongodb.net/cadastro?retryWrites=true&w=majority'),
    AlunosModule,
    UsersModule,
    AuthModule,
    StudiosModule,
  ],
  controllers: [
    FileTesteController, AppController],
  providers: [
    
    AppService],
})
export class AppModule { }
