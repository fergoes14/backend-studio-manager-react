import { Controller, UseGuards, Request, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './shared/auth.service';
import { LocalAuthGuard } from './shared/local-auth.guard';

@Controller()
export class AuthController {
    constructor(
        private authService: AuthService,
    ) { }

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req: any) {
        return this.authService.login(req.user);
    }

    @UseGuards(AuthGuard('jwt-refreshtoken'))
    @Post('auth/refreshtoken')
    async refreshtoken(@Request() req: any) {
        
        return  this.authService.login(req.user);
    }


}