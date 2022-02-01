import { FilesController } from './files.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';

@Module({
    imports: [
        MulterModule.register({
        dest: './src/files',
    })],

    controllers: [
        FilesController,],
    providers: [],
})
export class FilesModule { }
