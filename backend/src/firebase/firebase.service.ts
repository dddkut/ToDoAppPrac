import { Injectable, OnModuleInit } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService implements OnModuleInit {
  private app: admin.app.App;

  // private const app = initializeApp();

  onModuleInit() {
    this.app = admin.initializeApp({
      credential: admin.credential.cert(
        require(process.env.GOOGLE_APPLICATION_CREDENTIALS), //環境変数から取得する
      ),
      //   credential: admin.credential.applicationDefault(), // 認証情報を自動取得
      //   databaseURL: 'https://<your-project-id>.firebaseio.com', // 必要に応じて指定
    });
  }
}
