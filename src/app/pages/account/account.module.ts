import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AccountPage } from './account';
import { AccountPageRoutingModule } from './account-routing.module';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    AccountPageRoutingModule
  ],
  declarations: [
    AccountPage,
  ],
  providers: [
    AngularFireStorage
  ]
})
export class AccountModule { }
