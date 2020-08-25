import { Component, OnInit } from '@angular/core';
import {Candidateservice} from '../../../service/candidate.service'
@Component({
  selector: 'app-list-candidate',
  templateUrl: './list-candidate.component.html',
  styleUrls: ['./list-candidate.component.css']
})
export class ListCandidateComponent implements OnInit {
candidates : any;
  constructor( private candidateservice : Candidateservice ) { }

  ngOnInit(): void {
    this.loadCandidate();
  }
  loadCandidate(){
    this.candidateservice.getCandidates().subscribe((bodyresponse: any) => {
      this.candidates = bodyresponse;
    });
  }
  deleteCandidate(id) { 
    this.candidateservice.deleteCandidate(id).subscribe((bodyresponse: any) => {     
      this.ngOnInit(); 
    });
  }
}
