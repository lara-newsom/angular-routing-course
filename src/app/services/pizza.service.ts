import { Injectable, signal } from "@angular/core";
import type { PizzaOrder } from '../models/pizza-order';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  readonly pizzaOrders = signal<PizzaOrder[]>([]);

  addPizzaOrder(order: PizzaOrder): void {
    this.pizzaOrders.update((orders) => [...orders, order]);
  }

  removePizzaOrder(id: string): void {
    this.pizzaOrders.update((orders) => orders.filter((order) => order.id !== id));
  }

  clearPizzaOrders(): void {
    this.pizzaOrders.set([]);
  }
}
