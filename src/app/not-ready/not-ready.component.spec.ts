import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotReadyComponent } from './not-ready.component';

describe('NotReadyComponent', () => {
  let component: NotReadyComponent;
  let fixture: ComponentFixture<NotReadyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NotReadyComponent]
    });
    fixture = TestBed.createComponent(NotReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
