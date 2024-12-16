import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Token Verification API
  @Post('verify')
  async verifyToken(@Body('token') token: string): Promise<any> {
    return this.authService.verifyToken(token);
  }

  // Get Profile API for verified Users
  @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile(@Request() req): Promise<any> {
    return req.user;
  }
}
