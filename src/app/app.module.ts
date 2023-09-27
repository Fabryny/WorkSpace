import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Auth / Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { LoginModule } from './modules/login/login.module';
import { PagesModule } from './modules/pages/pages.module';

const firebaseConfig = {
  apiKey: "AIzaSyA81cAHCnScsr0uVHnQFZiJhX-obFd80o8",
  authDomain: "base-6d86b.firebaseapp.com",
  databaseURL: "https://base-6d86b-default-rtdb.firebaseio.com",
  projectId: "base-6d86b",
  storageBucket: "base-6d86b.appspot.com",
  messagingSenderId: "971052308380",
  appId: "1:971052308380:web:a008b20441f3c77e015a59"
};


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //Componentes
    LoginModule,
    PagesModule,

    
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
