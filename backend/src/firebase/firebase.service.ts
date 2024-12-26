import { Injectable, OnModuleInit } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as path from 'path';

@Injectable()
export class FirebaseService implements OnModuleInit {
  private app: admin.app.App;

  onModuleInit() {
    //TODO: 環境変数の読み込みはfirebase functions用の記述に変更する
    //TODO:serviceAccountRelativePathの有無で環境見分けるでもいいかも
    const serviceAccountRelativePath =
      process.env.GOOGLE_APPLICATION_CREDENTIALS;

    if (!serviceAccountRelativePath) {
      throw new Error(
        'GOOGLE_APPLICATION_CREDENTIALS is not set in the .env file',
      );
    }

    // resolving relative path using __dirname
    const serviceAccountPath = path.resolve(
      __dirname,
      serviceAccountRelativePath,
    );

    try {
      this.app = admin.initializeApp({
        credential: admin.credential.cert(require(serviceAccountPath)),
      });
      console.log('Firebase Admin initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Firebase Admin:', error.message);
      throw error;
    }
  }

  // Firebase Authentication
  public async getAuth(): Promise<admin.auth.Auth> {
    return this.app.auth();
  }

  // Firestore
  public async getFirestore(): Promise<admin.firestore.Firestore> {
    return this.app.firestore();
  }
}
