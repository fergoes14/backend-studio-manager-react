import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/shared/users.service';

var randtoken = require('rand-token');

@Injectable()
export class AuthService {
    constructor(
        
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async generateRefreshToken(id ):  Promise<string>{
        const refreshToken = randtoken.generate(16);
        const expirydate =new Date();
        expirydate.setDate(expirydate.getDate() + 6);
        await this.usersService.saveorupdateRefreshToke(refreshToken, id, expirydate);
        console.log('eeei passei no generate')
        return refreshToken
      }

    async validateUser(userEmail: string, userPassword: string, ) {
        const user = await this.usersService.getByEmail(userEmail);
        
        if (user && user.password === userPassword) {
            const { _id, name, email, studio:studio, photos:photos } = user;
            return { id: _id, name, email, studio:studio, photos:photos };
            
        }

        return null;
    }

    async login(user: any, ){
        const payload = {email: user.email, sub:user.id, studio:user.studio, name:user.name, photos: user.photos};
        return{
            access_token: this.jwtService.sign(payload),
            refreshToken: await this.generateRefreshToken(user.id),
            name:user.name,
            email:user.email,
            userId:user.id,
            studio:user.studio,
            photos:user.photos,
            
           
        };
    }
    

    async decode(jwt: string){ 
       
        return this.jwtService.decode(jwt, { json: true }) as { email: string, sub: string, studio: string, iat: BigInteger, exp: BigInteger };
    }
}


