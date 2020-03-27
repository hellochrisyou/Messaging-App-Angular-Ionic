import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeoplePage } from './people.component';
import { SharedModule } from '../../shared/shared.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [PeoplePage],
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
