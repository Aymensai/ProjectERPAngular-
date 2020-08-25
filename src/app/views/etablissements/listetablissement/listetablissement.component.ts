import { Component, OnInit } from '@angular/core';
import {Etablissementservice} from '../../../service/etablissement.service'
@Component({
  selector: 'app-listetablissement',
  templateUrl: './listetablissement.component.html',
  styleUrls: ['./listetablissement.component.css']
})
export class ListetablissementComponent implements OnInit {
  etablissements : any;
  constructor(private etablissementservice : Etablissementservice) { }

  ngOnInit(): void {
    this.loadEtablissement();
  }
loadEtablissement(){
  this.etablissementservice.getEtablissements().subscribe((bodyresponse: any) => {
    this.etablissements = bodyresponse;
  });
}
deleteEtablissement(id) { 
  this.etablissementservice.deleteEtablissement(id).subscribe((bodyresponse: any) => {   
    this.ngOnInit();   
  });
}
}
