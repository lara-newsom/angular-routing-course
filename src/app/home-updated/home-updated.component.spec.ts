import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUpdatedComponent } from './home-updated.component';

describe('HomeUpdatedComponent', () => {
  let component: HomeUpdatedComponent;
  let fixture: ComponentFixture<HomeUpdatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeUpdatedComponent]
    });
    fixture = TestBed.createComponent(HomeUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
