import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { provideLocationMocks } from '@angular/common/testing';
import { fireEvent, screen } from '@testing-library/angular';
import { createSpyFromClass } from 'jest-auto-spies';
import { TestBed } from '@angular/core/testing';
import { PieService } from '../../services/pie.service';
import { PRODUCT_ROUTER_TOKENS } from '../../products-view/product-routes.constant';
import { Pie } from '../../models/pie';
import { SideMenuComponent } from './side-menu.component';
import { createPie } from '../../models/mock-pie-factory';

@Component({
  template: 'Dummy'
})
export class DummyComponent{}

describe('SideMenuComponent', () => {
  const setup = async(pies: Pie[]) => {
    const mockPieService = createSpyFromClass(PieService, {
      observablePropsToSpyOn: ['filteredPies$']
    });
    mockPieService.filteredPies$.nextWith(pies);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: PieService,
          useValue: mockPieService
        },
        provideLocationMocks(),
        provideRouter([
          { path: PRODUCT_ROUTER_TOKENS.CUSTOMIZE, component: DummyComponent },
          { path: PRODUCT_ROUTER_TOKENS.DETAIL, component: DummyComponent },
          { path: '**', component: SideMenuComponent},
        ]),
      ]
    });
    const harness = await RouterTestingHarness.create();
    const activatedComponent = await harness.navigateByUrl('/', SideMenuComponent);
    const location = TestBed.inject(Location);

    return {
      activatedComponent,
      location,
      harness,
    };
  }

  it('navigates to the detail view when customize is false', async() => {
    const pieId1 = 'pieId1';
    const pie1 = createPie({id: pieId1});

    const { location } = await setup([pie1]);

    const button = screen.getByTestId(`detail-view-${pieId1}`);
    fireEvent.click(button);

    expect(location.path()).toBe(`/${PRODUCT_ROUTER_TOKENS.DETAIL}?productId=${pieId1}`);
  });

  it('navigates to the detail view when customize is true', async() => {
    const pieId1 = 'pieId1';
    const pie1 = createPie({id: pieId1});

    const { location, activatedComponent, harness } = await setup([pie1]);
    activatedComponent.customize = true;
    harness.detectChanges();

    const button = screen.getByTestId(`customize-view-${pieId1}`);
    fireEvent.click(button);

    expect(location.path()).toBe(`/${PRODUCT_ROUTER_TOKENS.CUSTOMIZE}?productId=${pieId1}`);
  });

});
