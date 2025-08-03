import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedProductComponent } from './selected-product.component';

describe('SelectedProductComponent', () => {
  let component: SelectedProductComponent;
  let fixture: ComponentFixture<SelectedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
