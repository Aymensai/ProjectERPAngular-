import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from "@angular/router";
import { ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit{

  registerForm : FormGroup;
  isSubmitted  =  false;

  constructor(private authService: AuthService,
     private router: Router,
      private toasterService: ToasterService) { }

  ngOnInit():  void {
    this.registerForm = new FormGroup({  

      etablissement : new FormControl("", Validators.required),
      adresse : new FormControl("", Validators.required),
      phoneNumber : new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required),
      role : new FormControl("etablissement"),
    })
  }

  get f() { return this.registerForm.controls; }


  onSubmit()
  {
    this.isSubmitted  =  true;
    if(this.registerForm.invalid)
    {
      // (err) => {
      // return this.toastr.warning(err.error.message);
      return;
    }

    this.authService.register(this.registerForm.value).subscribe((bodyResponse) => {
      this.toasterService.pop('success', 'Account Created Successfully');
      this.router.navigateByUrl('/login');
     },(error)=>{
       if (error.status ===400){
        this.toasterService.pop('warning', error.error.message);
       }
     });
  }
  
}
