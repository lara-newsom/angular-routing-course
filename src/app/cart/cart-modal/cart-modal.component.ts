import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartFormComponent } from "../cart-form/cart-form.component";
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-cart-modal',
  imports: [CartFormComponent, MatButton],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartModalComponent {

  close():void {
    // navigate using the router to clear the cart outlet
  }
}
