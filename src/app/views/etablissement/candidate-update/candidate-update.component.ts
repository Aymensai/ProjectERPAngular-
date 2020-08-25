import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {Candidateservice} from '../../../service/candidate.service';
import { ToasterService } from 'angular2-toaster';
@Component({
  selector: 'app-candidate-update',
  templateUrl: './candidate-update.component.html',
  styleUrls: ['./candidate-update.component.css']
})
export class CandidateUpdateComponent implements OnInit {
  updateCandidateForm : FormGroup;
  id : any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private candidateservice : Candidateservice,  private toasterService: ToasterService) { }

  ngOnInit(): void {
    this.updateCandidateForm = new FormGroup({  

      firstName : new FormControl("", Validators.required),
      lastName : new FormControl("", Validators.required),
      adresse : new FormControl("", Validators.required),
      phoneNumber: new FormControl("", [Validators.required, Validators.email]),
      email: new FormControl("", [Validators.required, Validators.email]),
      role : new FormControl("candidate")
    });
    this.id = this.activatedRoute.snapshot.params["id"];
    this.loadCandidateById();
  }
  loadCandidateById(){
    this.candidateservice.getCandidate(this.id).subscribe((bodyresponse)=>{
      this.updateCandidateForm.patchValue(bodyresponse);
      });
  }
  update() {
    this.candidateservice.updateCandidate(this.id, this.updateCandidateForm.value).subscribe((bodyresponse: any) => {
      this.toasterService.pop('success', 'Candidate Updated Successfully');
      this.router.navigateByUrl('/candidates/list');
     });
    }
}
