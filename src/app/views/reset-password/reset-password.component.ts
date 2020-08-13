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

  ngOnInit(): void {
    this.ResponseResetForm = new FormGroup({
      newPassword: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
      ]),
      confirmPassword: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
      ]),
      resetToken: new FormControl(this.token = this.route.snapshot.params["token"])
      });
      
  }
  get get() { return this.ResponseResetForm.controls; }
  
  ResetPassword() { 
   if (this.ResponseResetForm.invalid) {
     return;
   }
   
    this.authService.newPassword(this.ResponseResetForm.value).subscribe((res: { message: string }) => {
    this.toasterService.pop('success', res.message);  
    this.router.navigateByUrl("/login"); }, (error)=>{
      if ( error.status === 409 ) {
      this.toasterService.pop('warning', error.error.message);
    }});
    }
  }



    