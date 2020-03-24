import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UploaderComponent } from './component/uploader/uploader.component';
import { MaterialModule } from './material.module';
import { UploadTaskComponent } from './component/uploader/uploader-task/upload-task.component';
import { AngularFirestore } from '@angular/fire/firestore';



@NgModule({
  declarations: [UploaderComponent, UploadTaskComponent],
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
    UploadTaskComponent
  ],
  providers: [
    AngularFirestore
  ]
})
export class SharedModule { }
