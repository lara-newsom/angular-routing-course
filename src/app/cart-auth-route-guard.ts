import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { map } from 'rxjs';
import { ROUTER_TOKENS } from './app-route.constants';

export function authRouteGuard(route: string){
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    return authService.userAuth.pipe(
      map((permissions) =>
        !!permissions?.includes(route) || router.parseUrl(`/${ROUTER_TOKENS.NOT_AUTH}`
      )));
  }
}
