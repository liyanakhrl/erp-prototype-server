import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('secure')
export class SecureController {
  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  getProfile() {
    return "This is a protected route";
  }
}
