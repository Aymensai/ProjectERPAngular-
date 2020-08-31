import { Component, OnInit } from '@angular/core';
import {Candidateservice} from '../../../service/candidate.service';
import { Etablissementservice } from '../../../service/etablissement.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-affect-can',
  templateUrl: './affect-can.component.html',
  styleUrls: ['./affect-can.component.css']
})
export class AffectCanComponent implements OnInit {
candidates:any;
idCandidate:any;
idEtablissement: any;
  constructor(private router: Router , private activatedRoute: ActivatedRoute, private etablissementservice : Etablissementservice, private candidateservice : Candidateservice) { }

  ngOnInit(): void {
    this.candidateservice.getCandidates().subscribe((bodyresponse: any) => {
      this.candidates = bodyresponse;
   
      
    });
  }
// affectCandidate(){
//   this.etablissementservice.affectCandidate(affect, this.idCandidate, this.idEtablissement).subscribe((bodyresponse: any) => {
//   this.router.navigateByUrl('/etablissements/details/'+ this.idCandidate + '/' + this.idEtablissement);
//    });
// }
}
