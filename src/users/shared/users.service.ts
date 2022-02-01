import { User } from './user';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, Req, Res } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUsersDto } from '../dto/create-users.dto';
import{UpdateUersDto} from '../dto/update-users.dto'
import * as multer from 'multer';
import * as AWS from 'aws-sdk';
import * as multerS3 from 'multer-s3';

require('dotenv').config();

const AWS_S3_BUCKET_NAME = "studio-manager-img";
const s3 = new AWS.S3();
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});


@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async getAll() {
    return await this.userModel.find().populate('studio').exec();
  }

  async getById(id: string) {
    return await this.userModel.findById(id).exec();
  }

  async getByEmail(email: string) {
    return await this.userModel.findOne({ email }).exec();
  }

  async create(createUsersDto: CreateUsersDto) {
    const createdUser = new this.userModel(createUsersDto);
    return await createdUser.save();
  }

  async update(id: string, updateUsersDto:any) {
    await this.userModel.updateOne({ _id: id }, updateUsersDto)
    return this.getById(id)
}

  async saveorupdateRefreshToke(
    refreshToken:string,
    id:string, 
    refreshtokenexpires){
    await this.userModel.updateOne({_id:id},{refreshtoken:refreshToken, refreshtokenexpires});
   }

   
   async fileupload(@Req() req, @Res() res, updateUserDto: any, id: string) {
   
    const updateUser = await this.userModel.findById(id).exec()
    console.log(updateUser)
    

    try {
      this.upload(req, res, async function (error) {
        
        if (error) {
          console.log(error);

          return res.status(404).json(`Failed to upload image file: ${error}`);
        }
       
      
      res.status(201).json(req.files[0].location);
        
      updateUser.photos = req.files[0].location;

      updateUser.save()
     
    
      
      

      });
    } catch (error) {
      console.log(error);
      return res.status(500).json(`Failed to upload image file: ${error}`);
    }
  }

  upload = multer({
    storage: multerS3({
      
      s3: s3,
      bucket: AWS_S3_BUCKET_NAME,
      acl: 'public-read',
      key: function (request, file, cb) {
        cb(null, `${Date.now().toString()} - ${file.originalname}`);
      },
    }),
  }).array('photos', 1);

}


