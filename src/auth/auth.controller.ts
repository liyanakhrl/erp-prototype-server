import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleLogin() {
    // Initiates the Google login process
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleLoginCallback() {
    // Handles the callback from Google and returns user data
  }
}
