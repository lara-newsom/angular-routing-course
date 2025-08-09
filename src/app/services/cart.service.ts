import { Injectable, computed, effect, inject, linkedSignal } from '@angular/core';
import { Pie } from '../models/pie';
import { PieService } from './pie.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  readonly authService = inject(AuthService);
  readonly pieService = inject(PieService);

  readonly userCartItems = linkedSignal(() => {
    if(this.authService.userId()){
      return this.authService.authenticatedUser.value()?.cart ?? {}
    }
    return {};
  });

  readonly cartItemsPlusQuantity = computed(() => {
    const cartItems: Record<
      string,
      {
        quantity: number;
      }
    > = this.userCartItems();
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
    if(this.pieService.selectedPie.isLoading()) {
      return undefined;
    }
    const key = this.pieService.selectedPieId();

    const cartItems: Record<string, { quantity: number;}> = this.userCartItems();
    return key
      ? ({
          ...this.pieService.selectedPie.value(),
          quantity: cartItems[key]?.quantity || 0,
        } as Pie)
      : undefined;
  });

  readonly featuredPiesPlusQuantity = computed(() => {
    const pies = this.pieService.pies.value() || [];
    const last = pies.length - 1;
    const middle = Math.floor(last / 2);

    const cartItems: Record<string, { quantity: number;}> = this.userCartItems();

    const feat =  [0, middle, last].map((key) => ({
      ...pies[key],
      quantity: cartItems[pies[key]?.id]?.quantity || 0,
    }));
    return feat;
  });

  readonly cartTotals = computed(() => {
    const pies = this.pieService.pies.value() || [];

    let subtotal = 0;
    let totalCartCount = 0;

    for(const key of Object.keys(this.userCartItems())) {
      const pie = pies.find((pie) => pie.id === key);
      if (pie) {
        const quantity = this.userCartItems()[key].quantity || 0;
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
    const cartItems: Record<string, { quantity: number;}> = this.userCartItems();
    const updatedCart = {
      ...cartItems,
      [id]: {
        quantity: cartItems[id]?.quantity
          ? cartItems[id].quantity + 1
          : 1,
      },
    };

    this.userCartItems.set(updatedCart);

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
    const cartItems: Record<string, { quantity: number;}> = this.userCartItems();

    const updatedQuantity = (cartItems[id].quantity || 0) - 1;

    if(updatedQuantity) {
      cartItems[id].quantity = updatedQuantity;;
    } else {
      delete cartItems[id];
    }

    this.userCartItems.set({...cartItems});
    this.authService.updateUserCart({...cartItems});
  }

  checkout() {
    this.authService.updateUserCart({});
  }
}
