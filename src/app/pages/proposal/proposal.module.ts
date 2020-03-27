import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProposalRoutingModule } from './proposal-routing.module';
import { ProposalComponent } from './proposal.component';
import { ProposalPendingComponent } from './proposal-pending/proposal-pending.component';
import { ProposalHistoryComponent } from './proposal-history/proposal-history.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [ProposalComponent, ProposalPendingComponent, ProposalHistoryComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProposalRoutingModule
  ]
})
export class ProposalModule { }
