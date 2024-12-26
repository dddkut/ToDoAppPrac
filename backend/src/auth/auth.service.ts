import { Injectable, UnauthorizedException } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';

// called from auth.guard.ts
@Injectable()
export class AuthService {
  constructor(private readonly firebaseService: FirebaseService) {}

  // verify the token
  async verifyToken(token: string): Promise<any> {
    try {
      const auth = await this.firebaseService.getAuth();
      const decodedToken = await auth.verifyIdToken(token);
      return decodedToken; // returning user information
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
