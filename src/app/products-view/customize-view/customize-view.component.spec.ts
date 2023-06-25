import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeViewComponent } from './customize-view.component';

describe('CustomizeViewComponent', () => {
  let component: CustomizeViewComponent;
  let fixture: ComponentFixture<CustomizeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
