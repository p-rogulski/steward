import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean;
  constructor(private router: Router) {
    this.submitted = false;
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
    });

  }

  public get loginControl() { return this.loginForm.controls.login; }

  public get passwordControl() { return this.loginForm.controls.password; }

  public signIn(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.router.navigateByUrl('/session/plugin-management');
    }
  }

}
