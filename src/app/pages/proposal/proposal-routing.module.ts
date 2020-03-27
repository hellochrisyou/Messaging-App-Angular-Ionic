import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProposalComponent } from './proposal.component';
import { ProposalHistoryComponent } from './proposal-history/proposal-history.component';
import { ProposalPendingComponent } from './proposal-pending/proposal-pending.component';


const routes: Routes = [
  {
    path: '',
    component: ProposalComponent,
  },
  {
    path: 'proposal-pending',
    component: ProposalPendingComponent,
  },
  {
    path: 'proposal-history',
    component: ProposalHistoryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProposalRoutingModule { }
