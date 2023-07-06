import { Injectable, inject } from '@angular/core';
import { map, switchMap, timer } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  readonly authService = inject(AuthService);
  getUserHello(){
    return timer(3000).pipe(
      switchMap(() => this.authService.user$),
      map((user) => `Hello ${user}!`),
    )
  }
}
