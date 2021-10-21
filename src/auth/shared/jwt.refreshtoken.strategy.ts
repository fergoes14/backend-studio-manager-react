import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import {Injectable, UnauthorizedException, Body} from '@nestjs/common';
import { UsersService } from 'src/users/shared/users.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/shared/user';
import { jwtConstants } from './constants';
 
@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(Strategy,"jwt-refreshtoken") {
  constructor(@InjectModel('User') private userModel: Model<User>) {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('access_token'),
      ignoreExpiration: true,
      secretOrKey: jwtConstants.secret,
      passReqToCallback:true
    });
  }
 
  async validate(req: any,payload: any) {
    console.log('validate refresh')
    const user = await this.userModel.findById(payload.sub);
    if(!user){
        throw new UnauthorizedException(console.log('validate if 1'));
    }
    
    if(req.body.refreshToken != (await user).refreshtoken){
        throw new UnauthorizedException(console.log('validate if2'));
        
    }
    if( new Date() > new Date(await user.refreshtokenexpires)){
      throw new UnauthorizedException(console.log('validate if 3'));
      
    }
    return { 
      id: payload.sub,
      email: payload.email,
      studio: payload.studio,
      name: payload.name

      
    
    };
  }
}