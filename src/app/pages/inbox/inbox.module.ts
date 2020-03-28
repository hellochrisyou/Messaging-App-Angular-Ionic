import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxRoutingModule } from './inbox-routing.module';
import { InboxComponent } from './inbox.component';
import { IonAvatar, IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { InboxDetailsComponent } from './inbox-details/inbox-details.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { InboxProfileComponent } from './inbox-profile/inbox-profile.component';


@NgModule({
  declarations: [InboxComponent, InboxDetailsComponent, InboxProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    InboxRoutingModule
  ],
  providers: [
    Geolocation
  ]
})
export class InboxModule { }
