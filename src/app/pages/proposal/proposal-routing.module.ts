import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProposalComponent } from './proposal.component';
import { ProposalHistoryComponent } from './proposal-history/proposal-history.component';
import { ProposalPendingComponent } from './proposal-pending/proposal-pending.component';
import { ProposalResolver } from '../../core/service/resolve/proposal.resolve.service';
import { AuthGuard } from '../../core/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: ProposalComponent,
  },
  {
    path: 'proposal-pending',
    component: ProposalPendingComponent,
    resolve: { auctionValues: ProposalResolver }, canActivate: [AuthGuard]
  },
  {
    path: 'proposal-history',
    component: ProposalHistoryComponent,
    resolve: { auctionValues: ProposalResolver }, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProposalRoutingModule { }
