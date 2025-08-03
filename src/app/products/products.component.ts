import { Component, inject } from '@angular/core';
import { PieService } from '../services/pie.service';
import { AllComponent } from './all/all.component';
import { ProductDetailComponent } from './detail/product-detail.component';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    imports: [AllComponent, ProductDetailComponent]
})
export class ProductsComponent {
  protected readonly pieService = inject(PieService);
}
