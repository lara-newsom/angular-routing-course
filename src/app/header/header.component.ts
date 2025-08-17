import { Component, inject } from '@angular/core';
import { Category } from '../models/pie';
import { PieService } from '../services/pie.service';
import { MatMenuItem, MatMenuTrigger, MatMenu } from '@angular/material/menu';
import { MatButton } from '@angular/material/button';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import {
  ABOUT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PRODUCTS_ROUTE,
  DETAIL_ROUTE,
  CONTACT_ROUTE,
  CART_ROUTE,
} from '../app.routes';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [MatMenuItem, MatButton, MatMenuTrigger, MatMenu, RouterLink]
})
export class HeaderComponent {
  protected readonly pieService = inject(PieService);
  protected readonly authService = inject(AuthService);
  protected cartService = inject(CartService);

  protected readonly PRODUCTS_ROUTE = PRODUCTS_ROUTE;
  protected readonly HOME_ROUTE = HOME_ROUTE;
  protected readonly LOGIN_ROUTE = LOGIN_ROUTE;
  protected readonly ABOUT_ROUTE = ABOUT_ROUTE;
  protected readonly DETAIL_ROUTE = DETAIL_ROUTE;
  protected readonly CONTACT_ROUTE = CONTACT_ROUTE;
  protected readonly CART_ROUTE = CART_ROUTE;

  changeCategory(category: Category){
    this.pieService.clearSelectedPie();
    this.pieService.setSelectedCategory(category);
  }
}
