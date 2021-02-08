import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {

  constructor(private firebaseAuth: AngularFireAuth) { }

  signIn(email: string, password: string) {
    this.firebaseAuth.signInWithEmailAndPassword(email, password).
      then(result => {
        console.log(result);
      }).catch(e => {
        console.log(this.getErrorMessage(e.code));
      });
  }
  signUp(email: string, password: string) {
    this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(result => {
      console.log(result);
    }).catch(e => console.log(e));
  }
  logout() {
    this.firebaseAuth.signOut;
  }
  getErrorMessage(code: string): string {
    switch (code) {
      case 'auth/user-not-found':
        return 'User Not register';
        break;

      default:
        return code;
    }
  }
}
