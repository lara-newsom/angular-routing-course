import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly user = new BehaviorSubject<string | undefined>(undefined);
  readonly user$ = this.user.asObservable();

  authentication = this.http.get<Array<{name: string, permissions: string[]}>>('http://localhost:3000/authorization');
  userAuth = this.user.pipe(
    switchMap((user) => this.authentication.pipe(
      map((auth) => auth.find((userAuth) => userAuth.name.toLowerCase() === user?.toLowerCase())?.permissions) || []
    )));

  setUser(name?: string) {
    console.log('name', name)
    this.user.next(name);
  }
}
