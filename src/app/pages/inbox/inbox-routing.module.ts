import { InboxComponent } from './inbox.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxDetailsComponent } from './inbox-details/inbox-details.component';


const routes: Routes = [
  {
    path: '',
    component: InboxComponent,
  },
  {
    path: 'inbox-details',
    component: InboxDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
