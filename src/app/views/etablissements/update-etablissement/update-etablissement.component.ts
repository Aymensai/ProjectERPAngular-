import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Etablissementservice } from '../../../service/etablissement.service';
import { ToasterService } from 'angular2-toaster';
import { Candidateservice } from '../../../service/candidate.service';
@Component({
  selector: 'app-update-etablissement',
  templateUrl: './update-etablissement.component.html',
  styleUrls: ['./update-etablissement.component.css']
})
export class UpdateEtablissementComponent implements OnInit {
updateForm : FormGroup;
id : any;
candidates : any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, 
    private etablissementservice : Etablissementservice,  private toasterService: ToasterService,private candidateservice : Candidateservice ) { }

  ngOnInit(): void { 
    this.candidateservice.getCandidates().subscribe((bodyresponse: any) => {
      this.candidates = bodyresponse;
    });
   
    
    this.updateForm = new FormGroup({  

      etablissement : new FormControl("", Validators.required),
      adresse : new FormControl("", Validators.required),
      phoneNumber : new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      candidate : new FormControl("", Validators.required),
      role : new FormControl("etablissement"),

    });
    this.id = this.activatedRoute.snapshot.params["id"];
    this.loadetablissementById();
  }
  loadetablissementById(){
    this.etablissementservice.getEtablissement(this.id).subscribe((bodyresponse)=>{
      this.updateForm.patchValue(bodyresponse);
      });
      
  }


  update() {
    this.etablissementservice.updateEtablissement(this.id, this.updateForm.value).subscribe((bodyresponse: any) => {
      this.toasterService.pop('success', 'Etablissement Updated Successfully');
      this.router.navigateByUrl('/etablissements/details/'+ this.id);
     });
    }
  }


