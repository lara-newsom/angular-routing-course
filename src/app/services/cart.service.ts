import { Injectable, computed, inject, signal } from '@angular/core';
import { Pie } from '../models/pie';
import { PieService } from './pie.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  readonly cartItems = signal<{[key: string]: { quantity: number }}>({
    '3': { quantity: 1 },
    '10': { quantity: 1 },
  });
  readonly pieService = inject(PieService);

  readonly cartItemsPlusQuantity = computed(() => {
    return Object.keys(this.cartItems()).reduce((acc, key) => {
      const pie = this.pieService.piesSignal().find((pie) => pie.id === key);

      if(pie) {
        acc.push({
          ...pie,
          quantity: this.cartItems()[key].quantity
        });
      }

      return acc;
    }, [] as Pie[]);
  });

  readonly selectedItemPlusQuantity = computed(() => {
    const key = this.pieService.selectedPieSignal()?.id;
    return key ? {
      ...this.pieService.selectedPieSignal(),
      quantity: this.cartItems()[key]?.quantity || 0
    } as Pie : undefined;
  });

  readonly featuredPiesPlusQuantity = computed(() => {
    return this.pieService.featuredPiesSignal().map((pie) => ({
      ...pie,
      quantity: this.cartItems()[pie.id]?.quantity || 0
    }))
  });

  readonly subtotal = computed(() => {
    return Object.keys(this.cartItems()).reduce((acc, key) => {
      const pie = this.pieService.piesSignal().find((pie) => pie.id === key);

      if(pie) {
        return acc + ((this.cartItems()[key].quantity || 0) * pie.price);
      }

      return acc;
    }, 0);
  });

  readonly salesTax = computed(() => {
    return this.subtotal() * .0625;
  });

  readonly total = computed(() => {
    return this.subtotal() + this.salesTax() + 10;
  });

  readonly totalItems = computed(() => {
    return Object.keys(this.cartItems()).reduce((acc, key) => {
      const pie = this.pieService.piesSignal().find((pie) => pie.id === key);

      if(pie) {
        return acc + this.cartItems()[key].quantity || 0;
      }

      return acc;
    }, 0);
  });

  addCartItem (pie?: Pie) {
    if(pie){
      this.cartItems.set({
        ...this.cartItems(),
        [pie.id]: {
          quantity: this.cartItems()[pie.id]?.quantity ? this.cartItems()[pie.id].quantity + 1 : 1
        }
      })
    }
  }

  decrementCartItem (pie?: Pie) {
    if(pie) {
      const updatedCartItems = {
        ...this.cartItems(),
        [pie.id]: {
          quantity: this.cartItems()[pie.id]?.quantity ? this.cartItems()[pie.id].quantity - 1 : 0
        }
      }

      if(updatedCartItems[pie.id].quantity <= 0){
        delete updatedCartItems[pie.id];
      }

      this.cartItems.set(updatedCartItems);
    }
  }
}
