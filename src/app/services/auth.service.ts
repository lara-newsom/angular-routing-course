import { httpResource } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { Permission, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly userId = signal<string | undefined>(undefined);

  allUsers = httpResource<User[]>(() => '/users');

  authenticatedUser = httpResource<User>(() => `/users/${this.userId()}`);

  userPermissions = computed(() => {
    return this.userId() ? this.authenticatedUser.value()?.permissions || [] : [];
  });

  isAuthorized(requiredPermission: Permission): boolean {
    return !!this.authenticatedUser.value()?.permissions.includes(requiredPermission);
  }

  setUser(userId?: string) {
    this.userId.set(userId);
  }

  updateUserCart(cart: Record<string, { quantity: number }>): void {
    if(this.userId()){
      const user = this.authenticatedUser.value();
      if (user) {
        user.cart = cart;
        this.authenticatedUser.set(user);
      }
    }
  }
}
