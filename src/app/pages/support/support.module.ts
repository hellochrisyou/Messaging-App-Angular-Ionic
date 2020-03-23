import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SupportPage } from './support';
import { SupportPageRoutingModule } from './support-routing.module';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SupportPageRoutingModule
  ],
  declarations: [
    SupportPage,
  ],
  providers: [
    EmailComposer
  ]
})
export class SupportModule { }
