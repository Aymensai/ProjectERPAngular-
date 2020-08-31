import { Routes,  RouterModule } from '@angular/router';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { ListCandidateComponent } from './list-candidate/list-candidate.component';
import { NgModule } from '@angular/core';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { CandidateUpdateComponent } from './candidate-update/candidate-update.component';


const routes: Routes = [
    {
      path: '',
      
      data: {
        title: 'Candidates'
      }, 
      children: [
        {
          path : 'list',
          component: ListCandidateComponent,
          data: {
            title: 'List Candidate'
          }
        },
        {

          path : 'add/:id',
          component: AddCandidateComponent,
          data: {
            title: 'Add Candidate'
          }
        },
        {

          path : 'details/:id',
          component: CandidateDetailsComponent,
          data: {
            title: 'Details Candidate'
          }
        },
        
       {
          path : 'update/:id',
          component: CandidateUpdateComponent,
          data: {
            title: 'Update Candidate'
          }
        }, 
      //     path : 'details/:id',
      //   //   component: DetailsTodoComponent,
      //     data: {
      //       title: 'Details To do'
      //     }
        // }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CandidateRoutingModule {}