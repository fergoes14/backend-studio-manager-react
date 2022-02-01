import { ProfissionaisController } from './profissionais.controller';
import { ProfissionaisService } from './shared/profissionais.service';


import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { ProfissionaisSchema } from './schemas/profissionais.schema';

@Module({
    imports: [
        AuthModule,
        MongooseModule.forFeature([{ name: 'Profissionais', schema: ProfissionaisSchema }])

    ],
    controllers: [
        ProfissionaisController,],
    providers: [
        ProfissionaisService,
    ],
})
export class ProfissionaisModule { }
