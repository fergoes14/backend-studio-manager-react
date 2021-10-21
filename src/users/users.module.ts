import { UsersService } from './shared/users.service';


import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { userSchemas } from './schemas/schemas';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{name:'User', schema:userSchemas}])
    ],
    controllers: [
        UsersController],
    providers: [
        UsersService, ],
    exports:[UsersService]
})
export class UsersModule {}
