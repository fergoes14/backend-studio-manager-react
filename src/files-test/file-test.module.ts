

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { photoSchema } from './schemas/photos.schema';
import { FileTesteController } from './file-teste.controller';
import { ImageUploadService } from './shared/image_upload.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [
        AuthModule,
        MongooseModule.forFeature([{name:'Photo', schema:photoSchema}])
    ],
    controllers: [
        FileTesteController
    ],
    providers: [
        ImageUploadService
    ],
    exports: [ImageUploadService],
})
export class FileTestModule {}
