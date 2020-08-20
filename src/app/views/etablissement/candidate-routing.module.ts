import { Routes,  RouterModule } from '@angular/router';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { ListCandidateComponent } from './list-candidate/list-candidate.component';
import { NgModule } from '@angular/core';


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

          path : 'add',
          component: AddCandidateComponent,
          data: {
            title: 'Add Candidate'
          }
        },
        
      //  {
      //     path : 'update/:id',
      //   //   component: UpdateTodoComponent,
      //     data: {
      //       title: 'Update To do'
      //     }
      //   }, {
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