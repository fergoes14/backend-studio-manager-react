

import { Controller, Get, Param, Post, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from './utils/file-upload.utils';

@Controller('files')
export class FilesController {



    @Post('/upload')
    @UseInterceptors(FileInterceptor("photo", {
        storage: diskStorage({
            destination: './src/files/upload',
            filename: editFileName,
        }),
        fileFilter: imageFileFilter,
    }))
    async uploadedFile(@UploadedFile() file) {


        const response = {
            originalname: file.originalname,
            filename: file.filename,
        };
        return response;
    }



    @Post("uploads")
    @UseInterceptors(FilesInterceptor("photos[]", 10, { dest: "./src/files/uploads" }))
    async uploadMultipleFiles(@UploadedFiles() files) {
        const response = [];
        files.forEach(file => {
            const fileReponse = {
                originalname: file.originalname,
                filename: file.filename,
            };
            response.push(fileReponse);
        });
        return response;
    }

    @Get(':imgpath')
    seeUploadedFile(@Param('imgpath') image, @Res() res) {
        return res.sendFile(image, { root: './src/files/upload' });
    }


}
