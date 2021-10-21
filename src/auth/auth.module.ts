import { AuthController } from './auth.controller';
import { AuthService } from './shared/auth.service';
/*
https://docs.nestjs.com/modules
*/
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './shared/local.strategy';
import { JwtStrategy } from './shared/jwt.strategy';
import { jwtConstants } from './shared/constants';
import { StudiosModule } from 'src/studios/studios.module';
import { JwtRefreshTokenStrategy } from './shared/jwt.refreshtoken.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchemas } from 'src/users/schemas/schemas';

@Module({
    imports: [
        StudiosModule,
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1800s', }
            
        }),
        MongooseModule.forFeature([{name:'User', schema:userSchemas}])
    ],
    controllers: [
        AuthController,],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy,
        JwtRefreshTokenStrategy
    ],
    exports:[AuthService]
})
export class AuthModule { }
