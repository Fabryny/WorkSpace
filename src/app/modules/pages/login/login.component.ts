import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  email: string = '';
  senha: string = '';

  constructor(public auth: AuthService,
    private router: Router) {
    this.auth.logadoEvent.subscribe((value: boolean) => {
      alert('logado')
      // this.onLogin.emit(value)
      this.router.navigate(['/home']);
    })
  }

}
