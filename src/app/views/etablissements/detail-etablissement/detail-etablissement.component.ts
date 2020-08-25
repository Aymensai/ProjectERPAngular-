import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etablissementservice } from '../../../service/etablissement.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detail-etablissement',
  templateUrl: './detail-etablissement.component.html',
  styleUrls: ['./detail-etablissement.component.css']
})
export class DetailEtablissementComponent implements OnInit {
 detailsForm: FormGroup;
id : any;
detail : any;
  constructor(private activatedRoute: ActivatedRoute, private etablissementservice : Etablissementservice) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.loadEtablissementById();
  }
  loadEtablissementById(){
    this.etablissementservice.getEtablissement(this.id).subscribe((bodyresponse)=>{
      this.detail = (bodyresponse);
      });
  
  }
}
