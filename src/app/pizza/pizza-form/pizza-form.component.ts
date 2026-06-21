import { ChangeDetectionStrategy, Component, signal, computed, inject } from '@angular/core';
import { AVAILABLE_TOPPINGS, createPizzaOrder } from '../../models/pizza-order';
import { MatButton } from '@angular/material/button';
import { CartService } from '../../services/cart.service';
import { PizzaService } from '../../services/pizza.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrl: './pizza-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButton]
})
export class PizzaFormComponent {
  private readonly cartService = inject(CartService);
  private readonly pizzaService = inject(PizzaService);

  protected readonly availableToppings = AVAILABLE_TOPPINGS;
  readonly showLeaveModal = signal(false);

  private readonly router = inject(Router);
  readonly nextNavigation = signal<string | null>(null);

  protected closeLeaveModal() {
    this.showLeaveModal.set(false);
  }

  protected clearOrderAndNavigate() {
    this.closeLeaveModal();
    this.order.set({
      size: 'medium',
      ingredients: [],
      specialInstructions: ''
    });
    this.router.navigate([this.nextNavigation()])
  }

  protected readonly order = signal<{
    size: 'small' | 'medium' | 'large';
    ingredients: string[];
    specialInstructions?: string | null;
  }>({
    size: 'medium',
    ingredients: [],
    specialInstructions: ''
  });

  protected readonly loading = signal(false);
  protected readonly submitted = signal(false);

  readonly canSubmit = computed(() =>
    !!this.order().size && this.order().ingredients.length > 0 && !this.loading()
  );

  protected submitOrder() {
    const pizzaOrder = createPizzaOrder({
      size: this.order().size,
      ingredients: this.order().ingredients,
      specialInstructions: this.order().specialInstructions,
    });
    this.submitted.set(true);
    this.loading.set(false);
    this.pizzaService.addPizzaOrder(pizzaOrder);
    this.cartService.addCartItem(pizzaOrder.id);
    this.order.set({
      size: 'medium',
      ingredients: [],
      specialInstructions: ''
    });
  }

  protected newOrder() {
    this.submitted.set(false);
  }

  protected updateTopping(topping: string, checked: boolean | null) {
    this.order.update(order => ({
      ...order,
      ingredients: checked
        ? [...order.ingredients, topping]
        : order.ingredients.filter(t => t !== topping)
    }));
  }

  protected updateSize(size: 'small' | 'medium' | 'large') {
    this.order.update(order => ({ ...order, size }));
  }

  protected updateInstructions(value?: string | null) {
    this.order.update(order => ({ ...order, specialInstructions: value }));
  }
}
