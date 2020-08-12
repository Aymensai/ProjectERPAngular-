import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

 
    resetForm: FormGroup;
    CurrentState = false;
    doesNotMatch = false;
    validEmail = false;
    token;
  
    constructor(private auth: AuthService, private router: Router, private toasterService: ToasterService ) {}
  
    ngOnInit(): void {
      this.resetForm = new FormGroup({
        email: new FormControl(null, Validators.required),
      });
    }
    reqReset() {
      this.auth
        .requestReset(this.resetForm.value)
        .subscribe((res: { message: string }) => {
          this.toasterService.pop('success', res.message);
      
        });
    }
  }
