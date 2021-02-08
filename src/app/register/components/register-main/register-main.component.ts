import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register-main',
  templateUrl: './register-main.component.html',
  styleUrls: ['./register-main.component.scss']
})
export class RegisterMainComponent implements OnInit {

  constructor(private authService: AuthService) { }
  registerForm: FormGroup;
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }
  onRegister() {
    for (const key in this.registerForm.controls) {
      this.registerForm.controls[key].markAsDirty();
    }
    if (this.registerForm.valid) {
      this.authService.signUp(this.registerForm.value.name,this.registerForm.value.email, this.registerForm.value.password);
    }
  }
}
