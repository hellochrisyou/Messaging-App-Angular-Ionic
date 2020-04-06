import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ProposalRoutingModule } from './proposal-routing.module';
import { ProposalComponent } from './proposal.component';


@NgModule({
  declarations: [ProposalComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProposalRoutingModule
  ]
})
export class ProposalModule { }
