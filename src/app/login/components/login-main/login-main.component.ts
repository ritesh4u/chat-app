import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss']
})
export class LoginMainComponent implements OnInit {

  constructor(private authService: AuthService) { }
  loginForm: FormGroup;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }
  onLogin() {
    for (const key in this.loginForm.controls) {
      this.loginForm.controls[key].markAsDirty();
    }

    if (this.loginForm.valid) {
      this.authService.signIn(this.loginForm.value.email, this.loginForm.value.password);
    }
  }
}
