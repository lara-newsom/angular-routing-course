import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Pie } from '../../models/pie';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart-button',
  imports: [],
  templateUrl: './cart-button.component.html',
  styleUrl: './cart-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartButtonComponent {
  item = input.required<Pie>();

  protected readonly cartService = inject(CartService);
}
