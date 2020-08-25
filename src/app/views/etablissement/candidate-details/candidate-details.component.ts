import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {  ActivatedRoute } from '@angular/router';
import { Candidateservice } from '../../../service/candidate.service';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {
  detailsForm: FormGroup;
  detail : any;
  id : any;
  constructor(private activatedRoute: ActivatedRoute, private candidateservice : Candidateservice) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.loadCandidateById();
  }
  loadCandidateById(){
    this.candidateservice.getCandidate(this.id).subscribe((bodyresponse)=>{
      this.detail = (bodyresponse);
      });
  }
}
