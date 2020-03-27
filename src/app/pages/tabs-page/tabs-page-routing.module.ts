import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs-page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inbox',
        children: [
          {
            path: '',
            loadChildren: () => import('../inbox/inbox.module').then(m => m.InboxModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
          }
        ]
      },
      {
        path: 'proposal',
        children: [
          {
            path: '',
            loadChildren: () => import('../proposal/proposal.module').then(m => m.ProposalModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/inbox',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

