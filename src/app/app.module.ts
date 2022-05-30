import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QrGenerateComponent } from './qr-generate/qr-generate.component';
import { ResizeImgComponent } from './resize-img/resize-img.component';
import { HomeComponent } from './home/home.component';
import firebaseConfig from '../environments/firebase.config'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ImgToBase64Component } from './img-to-base64/img-to-base64.component';
import { NgxFileDragDropModule } from "ngx-file-drag-drop";
import { ReactiveFormsModule } from "@angular/forms";
const appRoutes: Routes = [
  { path: 'qrGenerate', component: QrGenerateComponent },
  { path: 'resizeImg', component: ResizeImgComponent },
  { path: 'home', component: HomeComponent },
  { path : 'imgToBase64' , component : ImgToBase64Component},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // { path: '**', component: PagenofoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    QrGenerateComponent,
    ResizeImgComponent,
    HomeComponent,
    ImgToBase64Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    NgxFileDragDropModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
