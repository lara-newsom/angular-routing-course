import { ChangeDetectionStrategy, Component, inject, model, signal, viewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BreadcrumbsComponent } from '../shared-ui/breadcrumbs/breadcrumbs.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    BreadcrumbsComponent,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  protected readonly authService = inject(AuthService);

  model = {
    userName: '',
    password: '',
  };


  logIn(user: string){
    this.authService.logIn(user);
  }

  logOut(){
    this.model.userName = '';
    this.authService.logOut();
  }
}
