import { Component, inject } from '@angular/core';
import { Category } from '../models/pie';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ROUTER_TOKENS } from '../app-route.constants';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';

@Component({
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
  ],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  readonly Category = Category;
  readonly ROUTER_TOKENS = ROUTER_TOKENS;
  readonly outlets = { [ROUTER_TOKENS.CART]: ROUTER_TOKENS.CHECKOUT };

  private readonly cartService = inject(CartService);
  readonly authService = inject(AuthService);
  name = '';

  readonly totalItems = this.cartService.totalItems;
}
