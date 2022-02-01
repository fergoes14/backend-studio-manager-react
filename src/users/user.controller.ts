import { User } from './shared/user';
import { UsersService } from './shared/users.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { Controller, Get, Param, Body, Post, Put, Req, Res } from '@nestjs/common';
import { UpdatePhotoDto } from 'src/files-test/dto/update-photos.dto';
import { UpdateUersDto } from './dto/update-users.dto';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
  ) { }

  @Get()
  async getAll(): Promise<User[]> {
    return this.usersService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<User> {
    return this.usersService.getById(id);
  }

  @Post()
  async create(@Body() createUsersDto: CreateUsersDto): Promise<User> {
    return this.usersService.create(createUsersDto);
  }

  @Put('/teste/:id')
  async update(@Param('id') id: string, @Body() updateUsersDto: UpdateUersDto): Promise<CreateUsersDto> {
   
      return this.usersService.update(id, updateUsersDto);
  }


  @Put(':id')
  async updatePhoto(@Param('id') id: string, @Body() updateUersDto: UpdateUersDto, @Req() request, @Res() response): Promise<CreateUsersDto> {
    try {
      this.usersService.fileupload(request, response, updateUersDto,id);


    } catch (error) {
      return response
        .status(500)
        .json(`Failed to upload image file: ${error.message}`);
    }
  }
}