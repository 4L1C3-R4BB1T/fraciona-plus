import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { isValidEmail } from 'src/app/utils/validators';

@Component({
  selector: 'app-create-account-page',
  templateUrl: './create-account-page.component.html',
  styleUrls: ['./create-account-page.component.scss'],
  providers: [MessageService]
})
export class CreateAccountPageComponent {

  loading = signal(false);

  constructor(
    readonly authService: AuthService,
    readonly loadingController: LoadingController,
    readonly messageService: MessageService,
    readonly router: Router
  ) { }

  async signUp(name: string, email: string, password: string, repassword: string) {
    if (!name || !email || !password || !repassword) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Preencha todos os campos!',
      });
      return;
    }

    if (!isValidEmail(email)) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Email inválido!',
      });
      return;
    }

    if (password.length < 6) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'A senha deve ter no mínimo 6 caracteres!',
      });
      return;
    }

    if (password !== repassword) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Confirmação de senha incorreta!',
      });
      return;
    }

    this.loading.set(true);

    try {
      await this.authService.signUp(email, password, name);
      this.router.navigate(['account/created']);
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Este e-mail já foi cadastrado!',
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Não foi possível realizar o cadastro.',
        });
      }
    } finally {
      this.loading.set(false);
    }
  }

}