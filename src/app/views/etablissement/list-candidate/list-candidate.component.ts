import { Component, OnInit } from '@angular/core';
import {EtablissementService} from '../../../service/etablisssement.service'
@Component({
  selector: 'app-list-candidate',
  templateUrl: './list-candidate.component.html',
  styleUrls: ['./list-candidate.component.css']
})
export class ListCandidateComponent implements OnInit {
candidates : any;
  constructor( private etablissementservice : EtablissementService ) { }

  ngOnInit(): void {
    this.loadCandidate();
  }
  loadCandidate(){
    this.etablissementservice.getCandidates().subscribe((bodyresponse: any) => {
      this.candidates = bodyresponse;
    });
  }
}
