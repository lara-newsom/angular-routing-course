import { TestBed } from '@angular/core/testing';
import { authRouteGuard } from './auth-route-guard';
import { AuthService } from './services/auth.service';
import { Router, UrlTree } from '@angular/router';
import { createSpyFromClass } from 'jest-auto-spies';
import { subscribeSpyTo } from '@hirez_io/observer-spy'
import { ROUTER_TOKENS } from './app-route.constants';

describe('authRouteGuard', () => {
  const setup = (
    path: string = '',
    permissions: string[] = []
  ) => {
    const mockAuthService = createSpyFromClass(AuthService, {
      observablePropsToSpyOn: ['userAuth']
    });
    mockAuthService.userAuth.nextWith(permissions);

    const mockRouter = createSpyFromClass(Router, {
      methodsToSpyOn: ['parseUrl']
    });
    const urlTree = new UrlTree();
    mockRouter.parseUrl.mockReturnValue(urlTree)

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: mockAuthService},
        { provide: Router, useValue: mockRouter}
      ]
    });

    const guard =  TestBed.runInInjectionContext(authRouteGuard(path));

    return {
      guard,
      urlTree,
      mockRouter,
    };
  }
  it('returns true when permission exists', () => {
    const path = 'cart';
    const permissions = [path, 'other permission'];

    const { guard } = setup(path, permissions);

    const guardValues = subscribeSpyTo(guard);

    expect(guardValues.getLastValue()).toBe(true);
  });

  it('returns UrlTree when permission does not exist', () => {
    const path = 'cart';
    const permissions = ['other permission'];

    const { guard, urlTree, mockRouter } = setup(path, permissions);

    const guardValues = subscribeSpyTo(guard);

    expect(guardValues.getLastValue()).toEqual(urlTree);
    expect(mockRouter.parseUrl).toHaveBeenCalledWith(`/${ROUTER_TOKENS.NOT_AUTH}`)
  });
})
