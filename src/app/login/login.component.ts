import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BreadcrumbsComponent } from '../shared-ui/breadcrumbs/breadcrumbs.component';
import { FormsModule } from '@angular/forms';
import { MESSAGE_SERVICE } from '../services/message.service';

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
  protected readonly messageService = inject(MESSAGE_SERVICE, {optional: true});

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
