import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './google/google.stratergy';

@Module({
  controllers: [AuthController],
  providers: [GoogleStrategy,AuthService]
})
export class AuthModule {}
