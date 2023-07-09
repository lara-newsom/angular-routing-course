import { HeaderComponent } from './header.component';
import { Component, signal } from '@angular/core';
import { Location } from '@angular/common';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { provideLocationMocks } from '@angular/common/testing';
import { fireEvent, screen } from '@testing-library/angular';
import { provideAutoSpy } from 'jest-auto-spies';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import { TestBed } from '@angular/core/testing';
import { ROUTER_TOKENS } from '../app-route.constants';

@Component({
  template: 'Dummy Component'
})
export class DummyComponent{}

describe('HeaderComponent', () => {
  const setup = async() => {
    const mockCartService = {
      totalItems: signal(1),
    };

    const options = {
      providers: [
        provideAutoSpy(AuthService),
        {
          provide: CartService,
          useValue: mockCartService
        },
        provideLocationMocks(),
        provideRouter([
          { path: ROUTER_TOKENS.CONTACT, component: DummyComponent },
          { path: ROUTER_TOKENS.ABOUT, component: DummyComponent },
          { path: ROUTER_TOKENS.HOME, component: DummyComponent },
          { path: ROUTER_TOKENS.CHECKOUT, component: DummyComponent },
          { path: '**', component: HeaderComponent},
        ]),
      ]
    };
    TestBed.configureTestingModule(options);
    const harness = await RouterTestingHarness.create();
    const activatedComponent = await harness.navigateByUrl('/', HeaderComponent);
    const location = TestBed.inject(Location);


    return {
      activatedComponent,
      location,
    };
  }

  it('navigates to the about route', async() => {
    const { location } = await setup();

    const button = screen.getByTestId('About');
    fireEvent.click(button);

    expect(location.path()).toBe(`/${ROUTER_TOKENS.ABOUT}`)
  });

  it('navigates to the contact route', async() => {
    const { location } = await setup();

    const button = screen.getByTestId('Contact');
    fireEvent.click(button);

    expect(location.path()).toBe(`/${ROUTER_TOKENS.CONTACT}`)
  });
});
