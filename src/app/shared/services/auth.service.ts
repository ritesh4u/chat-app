import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import moduleName from 'firebase';
@Injectable()
export class AuthService {

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.firebaseAuth.onAuthStateChanged(authState => {
      this.user = authState;
      // console.log(this.user);
    });
  }
  user: firebase.default.User;

  getUserPromise(): Promise<firebase.default.User> {
    return new Promise(resolve => {
      this.firebaseAuth.onAuthStateChanged(authState => {
        this.user = authState;
        if (this.user) {
          resolve(this.user);
        } else {
          resolve(null);
        }
      });
    });
  }
  signIn(email: string, password: string) {
    this.firebaseAuth.signInWithEmailAndPassword(email, password).
      then(result => {
        console.log(result);
        this.user = result.user;
        this.router.navigate(['/main']);
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
  async logout() {
    this.user = null;
    await this.firebaseAuth.signOut();
    window.location.href = "/login";
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
