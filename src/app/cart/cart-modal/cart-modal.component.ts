import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartFormComponent } from "../cart-form/cart-form.component";

@Component({
  selector: 'app-cart-modal',
  imports: [CartFormComponent],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartModalComponent {

}
