import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedCardPage } from './component/card/card.component';
import { SharedProfilePage } from './component/profile/profile.component';
import { TableComponent } from './component/table/table.component';
import { UploadTaskComponent } from './component/uploader/uploader-task/upload-task.component';
import { UploaderComponent } from './component/uploader/uploader.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [UploaderComponent, UploadTaskComponent, TableComponent, SharedProfilePage, SharedCardPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    UploaderComponent,
    UploadTaskComponent,
    TableComponent,
    SharedProfilePage,
    SharedCardPage

  ],
  providers: [
    AngularFirestore
  ]
})
export class SharedModule { }
