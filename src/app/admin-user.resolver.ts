import { RedirectCommand, ResolveFn, Router, UrlTree } from '@angular/router';
import { User } from './models/user';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { LOGIN_ROUTE, NOT_ADMIN_ROUTE } from './app.routes';

export const adminUserResolver: ResolveFn<User | UrlTree> = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if(!authService.authenticatedUser.hasValue()){
    return new RedirectCommand(router.createUrlTree(['/', LOGIN_ROUTE]));
  }

  if(! authService.authenticatedUser.value()?.permissions.find(grant => grant === 'admin')){
    return new RedirectCommand(router.createUrlTree(['/', NOT_ADMIN_ROUTE]));
  }

  return authService.authenticatedUser.value();
};
