import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { ListCandidateComponent } from './list-candidate/list-candidate.component';
import { CandidateRoutingModule} from './candidate-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { CandidateUpdateComponent } from './candidate-update/candidate-update.component';



@NgModule({
  declarations: [AddCandidateComponent, ListCandidateComponent, CandidateDetailsComponent, CandidateUpdateComponent],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CandidateModule { }
