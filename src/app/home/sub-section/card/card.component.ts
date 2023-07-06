import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ROUTER_TOKENS } from '../../../app-route.constants';
import { Pie } from '../../../models/pie';
import { CartService } from '../../../services/cart.service';

@Component({
  standalone: true,
  imports: [
    MatButtonModule,
    RouterLink,
  ],
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() pie!: Pie;
  readonly cartService = inject(CartService);
  readonly ROUTER_TOKENS = ROUTER_TOKENS;
}
