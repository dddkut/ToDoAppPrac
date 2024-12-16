import { Injectable, OnModuleInit } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';
import * as path from 'path';

// loading .env
dotenv.config();

@Injectable()
export class FirebaseService implements OnModuleInit {
  private app: admin.app.App;

  onModuleInit() {
    //TODO: 環境変数の読み込みはfirebase functions用の記述に変更する
    const serviceAccountRelativePath =
      process.env.GOOGLE_APPLICATION_CREDENTIALS;

    if (!serviceAccountRelativePath) {
      throw new Error(
        'GOOGLE_APPLICATION_CREDENTIALS is not set in the .env file',
      );
    }

    // resolving absolute path using __dirname
    const serviceAccountPath = path.resolve(
      __dirname,
      serviceAccountRelativePath,
    );

    this.app = admin.initializeApp({
      credential: admin.credential.cert(require(serviceAccountPath)),
    });

    console.log('Firebase Admin initialized');
  }

  // Firebase Authentication
  public getAuth(): admin.auth.Auth {
    return this.app.auth();
  }

  // Firestore
  public getFirestore(): admin.firestore.Firestore {
    return this.app.firestore();
  }
}
