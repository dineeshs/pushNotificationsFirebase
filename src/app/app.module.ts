import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { MessagingService } from './messaging.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

export const firebaseConfig = {
    //fill this data with the data you get from the firebase console
    apiKey: "AIzaSyCqrW9yfkX5q1giC_ZI2DKHNfd8aM9Nq5A",
    authDomain: "push-da582.firebaseapp.com",
    databaseURL: "https://push-da582.firebaseio.com",
    projectId: "push-da582",
    storageBucket: "push-da582.appspot.com",
    messagingSenderId: "549130941048"
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpModule,
  ],
  providers: [MessagingService, AngularFireDatabase, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
