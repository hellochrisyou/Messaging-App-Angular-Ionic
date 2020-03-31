import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedCardPage } from './component/card/card.component';
import { ProfileModal } from './component/profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileModal
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
