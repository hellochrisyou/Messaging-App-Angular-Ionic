import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ProposalRoutingModule } from './proposal-routing.module';
import { ProposalComponent } from './proposal.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [ProposalComponent],
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    ProposalRoutingModule
  ]
})
export class ProposalModule { }
