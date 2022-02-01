import { Req, Res, Injectable } from '@nestjs/common';
import * as multer from 'multer';
import * as AWS from 'aws-sdk';
import * as multerS3 from 'multer-s3';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePhotoDto } from '../dto/create-photos.dto';
require('dotenv').config();

const AWS_S3_BUCKET_NAME = "studio-manager-img";
const s3 = new AWS.S3();
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

@Injectable()
export class ImageUploadService {
  constructor(@InjectModel('Photo') private readonly photosModel: Model<CreatePhotoDto>) { }

  async created(createPhotoDto: any){
    const createdPhoto = new this.photosModel(createPhotoDto)
    return await createdPhoto.save();
  }

  async getAll(userId: string){
    return await this.photosModel.find({
      'user': userId
    }).exec()

  }

  async getById(id: string) {
    return await this.photosModel.findById(id).exec();
}

  async update(id: string, updateAlunosDto:any) {
    await this.photosModel.updateOne({ _id: id }, updateAlunosDto)
    return this.getById(id)
}

  async delete(id: string) {
    return await this.photosModel.deleteOne({ _id: id }).exec()
}

  async fileupload(@Req() req, @Res() res, createPhotoDto: any) {
    const createdPhoto = new this.photosModel(createPhotoDto,{photo: ''});
    try {
      this.upload(req, res, async function (error) {
        
        if (error) {
          console.log(error);

          return res.status(404).json(`Failed to upload image file: ${error}`);
        }
       
      createdPhoto.photo = req.files[0].location;
      res.status(201).json(req.files[0].location);
        

        createdPhoto.save();

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
  }).array('photo', 1);
}