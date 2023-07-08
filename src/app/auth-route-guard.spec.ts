import { TestBed } from '@angular/core/testing';
import { authRouteGuard } from './auth-route-guard';
import { AuthService } from './services/auth.service';
import { Router, UrlTree } from '@angular/router';
import { createSpyFromClass } from 'jest-auto-spies';
import { subscribeSpyTo } from '@hirez_io/observer-spy'

describe('authRouteGuard', () => {
  const setup = (
    path: string = '',
    permissions: string[] = []
  ) => {
    const mockAuthService = createSpyFromClass(AuthService, {
      observablePropsToSpyOn: ['userAuth']
    });
    mockAuthService.userAuth.nextWith(permissions);

    // mock router and spy on parseUrl to return url tree

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: mockAuthService},
        // provide mock router
      ]
    });

    // instantiate route guard in test bed injection context

    return {
    };
  }
  it('returns true when permission exists', () => {
    const path = 'cart';
    const permissions = [path, 'other permission'];

    // setup

    // subscribe to guard

    // expect guard to return true
  });

  it('returns UrlTree when permission does not exist', () => {
    const path = 'cart';
    const permissions = ['other permission'];

    // setup

    // subscribe to guard

    // expect guard to return a url tree
  });
})
