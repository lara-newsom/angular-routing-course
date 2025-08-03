import { Component, inject } from '@angular/core';
import { PieService } from '../services/pie.service';
import { AllComponent } from './all/all.component';
import { SelectedProductComponent } from "./selected-product/selected-product.component";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    imports: [AllComponent, SelectedProductComponent]
})
export class ProductsComponent {
  protected readonly pieService = inject(PieService);
}
