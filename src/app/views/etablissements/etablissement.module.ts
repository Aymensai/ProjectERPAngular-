import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListetablissementComponent } from './listetablissement/listetablissement.component';
import { DetailEtablissementComponent } from './detail-etablissement/detail-etablissement.component';
import { UpdateEtablissementComponent } from './update-etablissement/update-etablissement.component';
import { EtablissementRoutingModule } from './etabllissement-routing.module';
import { MailingComponent } from './mailing/mailing.component';
import { AffectCanComponent } from './affect-can/affect-can.component';


@NgModule({
    declarations: [ListetablissementComponent, DetailEtablissementComponent, UpdateEtablissementComponent, MailingComponent, AffectCanComponent,  ],
    imports: [
      CommonModule,
      EtablissementRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,     
    ]
  })
  export class EtablissementModule { }
  