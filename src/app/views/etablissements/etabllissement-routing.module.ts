import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListetablissementComponent } from './listetablissement/listetablissement.component';
import { DetailEtablissementComponent } from './detail-etablissement/detail-etablissement.component';
import { UpdateEtablissementComponent } from './update-etablissement/update-etablissement.component';
import { MailingComponent } from './mailing/mailing.component';
const routes: Routes = [
    {
      path: '',
      
      data: {
        title: 'Etablissements'
      }, 
      children: [
        {
          path : 'list',
          component: ListetablissementComponent,
          data: {
            title: 'List Etablissement'
          }
        },
        {

          path : 'details/:id',
          component: DetailEtablissementComponent,
          data: {
            title: 'Details Etablissement'
          }
        },
        {

            path : 'update/:id',
            component: UpdateEtablissementComponent,
            data: {
              title: 'Update Etablissement'
            }
          },
          {

            path : 'mailing',
            component: MailingComponent,
            data: {
              title: 'Mailing'
            }
          },
        ]
    }
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class EtablissementRoutingModule {}