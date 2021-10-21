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
    
    MongooseModule.forRoot('mongodb+srv://fergoes:141196fer@cluster0.scsd5.mongodb.net/cadastro?retryWrites=true&w=majority'),
    AlunosModule,
    UsersModule,
    AuthModule,
    StudiosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
