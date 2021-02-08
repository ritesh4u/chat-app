import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import moduleName from 'firebase';
@Injectable()
export class AuthService {

  constructor(private firebaseAuth: AngularFireAuth) {
    this.firebaseAuth.onAuthStateChanged(authState => {
      this.user = authState;
      // console.log(this.user);
    });
  }
  user: firebase.default.User;
  signIn(email: string, password: string) {
    this.firebaseAuth.signInWithEmailAndPassword(email, password).
      then(result => {
        console.log(result);
        this.user = result.user;
      }).catch(e => {
        console.log(this.getErrorMessage(e.code));
      });
  }
  async signUp(name: string, email: string, password: string) {
    let result = await this.firebaseAuth.createUserWithEmailAndPassword(email, password);
    this.user = result.user;
    await this.user.updateProfile({ displayName: name });
    console.log(this.user);

  }
  logout() {
    this.user = null;
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
