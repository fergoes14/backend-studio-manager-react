import { Body, Controller, Delete, Get, Headers, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/auth/shared/auth.service';
import { JtwAuthGuard } from 'src/auth/shared/jtw-auth.guard';
import { CreatePhotoDto } from './dto/create-photos.dto';
import { UpdatePhotoDto } from './dto/update-photos.dto';
import { ImageUploadService } from './shared/image_upload.service'
import { Photos } from './shared/photos';

@Controller('fileupload')
export class FileTesteController {
  constructor(
    private authService: AuthService,
    private readonly imageUploadService: ImageUploadService
  ) { }

  @UseGuards(JtwAuthGuard)
  @Get()
  async getAll(
    @Headers('Authorization') auth: string
  ): Promise<Photos[]> {
    const jwt = auth.replace('Bearer ', '');
    const json = this.authService.decode(jwt);

    console.log(json)
    return this.imageUploadService.getAll((await json).sub);
  }

  @UseGuards(JtwAuthGuard)
  @Get(':id')
  async getById(@Param('id') id: string): Promise<CreatePhotoDto> {
      return this.imageUploadService.getById(id);
  }

  @UseGuards(JtwAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
      this.imageUploadService.delete(id);
  }

  @UseGuards(JtwAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() updatePhotoDto: UpdatePhotoDto): Promise<CreatePhotoDto> {
     
        return this.imageUploadService.update(id, updatePhotoDto);
    }

  @Post('/teste')
  async created(@Body() createPhotoDto: CreatePhotoDto): Promise<CreatePhotoDto> {
    return this.imageUploadService.created(createPhotoDto);
  }

  @Post()
  async create(@Body() createPhotoDto: CreatePhotoDto, @Req() request, @Res() response): Promise<CreatePhotoDto> {
    try {
      this.imageUploadService.fileupload(request, response, createPhotoDto);


    } catch (error) {
      return response
        .status(500)
        .json(`Failed to upload image file: ${error.message}`);
    }
  }
}


