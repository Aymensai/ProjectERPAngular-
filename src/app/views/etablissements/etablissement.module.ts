import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListetablissementComponent } from './listetablissement/listetablissement.component';
import { DetailEtablissementComponent } from './detail-etablissement/detail-etablissement.component';
import { UpdateEtablissementComponent } from './update-etablissement/update-etablissement.component';
import { EtablissementRoutingModule } from './etabllissement-routing.module';
import { MailingComponent } from './mailing/mailing.component';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';


@NgModule({
    declarations: [ListetablissementComponent, DetailEtablissementComponent, UpdateEtablissementComponent, MailingComponent, UploadPictureComponent  ],
    imports: [
      CommonModule,
      EtablissementRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,   
      MatInputModule,
      MatIconModule  
    ]
  })
  export class EtablissementModule { }
  