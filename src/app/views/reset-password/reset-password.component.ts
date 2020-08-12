import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router, ActivatedRoute, } from '@angular/router';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  hide1 = true;
  hide = true;
  ResponseResetForm: FormGroup;
  errorMessage: string;
  successMessage: string;
  resetToken: null;
  CurrentState: boolean = false;
  IsResetFormValid = true;
  token;
  validCode;
  code: number;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private toasterService: ToasterService
  ) {}

  ngOnInit() {
    this.Init();
    this.route.queryParams.subscribe((param) => {
      this.token = param["token"];
    });
  }

  onCodeSubmit(f) {
    this.code = Number(f.value.code);
  }

  Init() {
    this.ResponseResetForm = new FormGroup({
      newPassword: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
      ]),
      confirmPassword: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  validatePassword() {
    const new_password = this.ResponseResetForm.value.newPassword;
    const confirm_password = this.ResponseResetForm.value.confirmPassword;

    if (confirm_password.length <= 0) {
      return true;
    }

    if (confirm_password !== new_password) {
      return true;
    }

    return false;
  }

  ResetPassword() {
    if (this.validatePassword()) {
      return this.toasterService.pop('warning', 'Password does not match');
    } else {
      this.authService
        .newPassword(
          { newPassword: this.ResponseResetForm.value.newPassword.this.token},
          
        )
        .subscribe((res: { message: string }) => {
          return (
            this.toasterService.pop('success', res.message) &&
            this.router.navigateByUrl("/login")
          );
        });
    }
  }
}
