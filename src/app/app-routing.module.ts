import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'inbox',
    loadChildren: () => import('./pages/inbox/inbox.module').then(m => m.InboxModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'shared',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'people',
    loadChildren: () => import('./pages/people/people.module').then(m => m.PeopleModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'proposal',
    loadChildren: () => import('./pages/proposal/proposal.module').then(m => m.ProposalModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'shared',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
