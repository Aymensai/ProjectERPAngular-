import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Candidateservice} from '../../../service/candidate.service'


@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {
addForm : FormGroup;

  constructor(private router: Router, private candidateservice : Candidateservice) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName : new FormControl("", Validators.required),
      adresse : new FormControl("", Validators.required),
      phoneNumber : new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      role : new FormControl("candidate")
      
    });
  }
  add() {
    this.candidateservice.addCandidate(this.addForm.value).subscribe((bodyresponse: any) => {
      this.router.navigateByUrl('/candidates/list');
     });
  }
}