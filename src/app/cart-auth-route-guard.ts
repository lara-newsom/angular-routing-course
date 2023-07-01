import { Injectable, inject } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./services/auth.service";
import { map } from "rxjs";
import { ROUTER_TOKENS } from "./app.routes";

@Injectable({ providedIn: 'root' })
export class CartAuthGuard implements CanActivate {
  private authService = inject(AuthService);
  private router = inject(Router);

  canActivate() {
    return this.authService.userAuth.pipe(
      map((permissions) => !!permissions?.includes('cart') || this.router.parseUrl(`/${ROUTER_TOKENS.NOT_AUTH}`)))
  }
}
