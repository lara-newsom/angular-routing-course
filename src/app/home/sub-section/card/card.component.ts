import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Pie } from 'src/app/models/pie';
import { CartService } from 'src/app/services/cart.service';

@Component({
  standalone: true,
  imports: [
    MatButtonModule,
  ],
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() pie!: Pie;
  readonly cartService = inject(CartService);
}
