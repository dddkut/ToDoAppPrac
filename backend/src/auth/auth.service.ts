import { Injectable, UnauthorizedException } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable()
export class AuthService {
  constructor(private readonly firebaseService: FirebaseService) {}

  // トークンの検証
  async verifyToken(token: string): Promise<any> {
    try {
      const decodedToken = await this.firebaseService
        .getAuth()
        .verifyIdToken(token);
      return decodedToken; // returning user information
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
