import { Module } from '@nestjs/common';
import { AlunosController } from './alunos.controller';
import { AlunosService } from './shared/alunos.service';
import { AlunoSchemas } from './schemas/alunos.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[
    AuthModule,
    MongooseModule.forFeature([{name:'Alunos' , schema:AlunoSchemas}])
  ],
  controllers: [AlunosController],
  providers: [AlunosService]
})
export class AlunosModule {}
