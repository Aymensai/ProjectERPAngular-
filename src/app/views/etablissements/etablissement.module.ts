import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListetablissementComponent } from './listetablissement/listetablissement.component';
import { DetailEtablissementComponent } from './detail-etablissement/detail-etablissement.component';
import { UpdateEtablissementComponent } from './update-etablissement/update-etablissement.component';
import { EtablissementRoutingModule } from './etabllissement-routing.module';

@NgModule({
    declarations: [ListetablissementComponent, DetailEtablissementComponent, UpdateEtablissementComponent ],
    imports: [
      CommonModule,
      EtablissementRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
    ]
  })
  export class EtablissementModule { }
  