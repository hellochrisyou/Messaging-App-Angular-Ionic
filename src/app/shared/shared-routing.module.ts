import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedCardPage } from './component/card/card.component';
import { SharedProfilePage } from './component/profile/profile.component';


const routes: Routes = [
  {
    path: 'profile',
    component: SharedProfilePage,
  },
  {
    path: 'card',
    component: SharedCardPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
