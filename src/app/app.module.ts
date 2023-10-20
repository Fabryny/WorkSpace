import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Auth / Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { PagesModule } from './modules/pages/pages.module';
import { FbzTimerModule } from './shared/lib/components/fbz-timer/fbz-timer.module';
import { TimerService } from './shared/lib/components/fbz-timer/timer.service';

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
    PagesModule,
    FbzTimerModule,
    
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  providers: [TimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
