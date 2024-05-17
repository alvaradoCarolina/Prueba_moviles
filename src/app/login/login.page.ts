import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email: string;
  password: string;

  constructor(private authService: AuthService) {}

  async login() {
    try {
      await this.authService.signIn(this.email, this.password);
      // Redirigir al usuario a la página principal o cualquier otra página deseada
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  }
}
