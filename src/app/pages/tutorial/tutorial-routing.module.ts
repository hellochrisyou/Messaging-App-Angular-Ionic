import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TutorialPage } from './tutorial';

const routes: Routes = [
  {
    path: '',
    component: TutorialPage,
    data: { num: '8' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialPageRoutingModule { }
