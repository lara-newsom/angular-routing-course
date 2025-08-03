import { Injectable, computed, inject } from '@angular/core';
import { Pie } from '../models/pie';
import { PieService } from './pie.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  readonly authService = inject(AuthService);
  readonly pieService = inject(PieService);

  readonly userCartItems =
    this.authService.authenticatedUser.value()?.cart || {};

  readonly cartItemsPlusQuantity = computed(() => {
    const cartItems: Record<
      string,
      {
        quantity: number;
      }
    > = this.authService.authenticatedUser.value()?.cart || {};
    return Object.keys(cartItems).reduce((acc, key) => {
      const pie = this.pieService.pies.value()?.find((pie) => pie.id === key);

      if (pie) {
        acc.push({
          ...pie,
          quantity: cartItems[key].quantity,
        });
      }

      return acc;
    }, [] as Pie[]);
  });

  readonly selectedItemPlusQuantity = computed(() => {
    const key = this.pieService.selectedPieId();

    const cartItems: Record<string, { quantity: number;}> = this.authService.authenticatedUser.value()?.cart || {};
    return key
      ? ({
          ...this.pieService.selectedPie.value(),
          quantity: cartItems[key]?.quantity || 0,
        } as Pie)
      : undefined;
  });

  readonly featuredPiesPlusQuantity = computed(() => {
    const pies = this.pieService.pies.value() || [];
    const last = pies.length;
    const middle = Math.floor(last / 2);

    const cartItems: Record<string, { quantity: number;}> = this.authService.authenticatedUser.value()?.cart || {};

    return [0, middle, last].map((key) => ({
      ...pies[key],
      quantity: cartItems[pies[key].id]?.quantity || 0,
    }));
  });

  readonly cartTotals = computed(() => {
    const cartItems: Record<string, { quantity: number;}> = this.authService.authenticatedUser.value()?.cart || {};
    const pies = this.pieService.pies.value() || [];

    let subtotal = 0;
    let totalCartCount = 0;

    for(const key in Object.keys(cartItems)) {
      const pie = pies.find((pie) => pie.id === key);
      if (pie) {
        const quantity = cartItems[key].quantity || 0;
        subtotal += quantity * pie.price;
        totalCartCount += quantity;
      }
    }

    const shipping = 10; // Flat shipping rate
    const totalTax = subtotal * 0.0625; // 6.25% sales tax

    return {
      totalCartCount,
      subtotal,
      totalTax,
      shipping,
      total: subtotal + totalTax + shipping,
    }
  });

  addCartItem(id: string) {
    const cartItems: Record<string, { quantity: number;}> = this.authService.authenticatedUser.value()?.cart || {};

    this.authService.updateUserCart({
      ...cartItems,
      [id]: {
        quantity: cartItems[id]?.quantity
          ? cartItems[id].quantity + 1
          : 1,
      },
    });
  }

  decrementCartItem(id: string) {
    const cartItems: Record<string, { quantity: number;}> = this.authService.authenticatedUser.value()?.cart || {};

    const updatedQuantity = (cartItems[id].quantity || 0) - 1;

    if(updatedQuantity) {
      this.authService.updateUserCart({
        ...cartItems,
        [id]:{
          quantity: updatedQuantity
        }
      });
    } else {
      delete cartItems[id];
      this.authService.updateUserCart({...cartItems});
    }
  }
}
