import { EventEmitter, Injectable, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() logadoEvent: EventEmitter<void> = new EventEmitter<void>;

  usuario: any;
  error: any;

  constructor(public auth: AngularFireAuth) { }

  async emailSignin(email: string, senha: string) {
    try {
      const credencial = await this.auth.signInWithEmailAndPassword(email, senha);

      this.usuario = credencial.user
      this.logadoEvent.emit()
    } catch (error) {
      this.error = error;
    }
  }


  async googleSignin() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credencial = await this.auth.signInWithPopup(provider);
      this.usuario = credencial.user;
    } catch(error){
      this.error = error
    }
  }

  async signOut(){
    await this.auth.signOut();
    this.usuario = null;
    this.logadoEvent.emit()

  }
}
