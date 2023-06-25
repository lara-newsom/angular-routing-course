import { Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartService } from '../services/cart.service';
import { MatButtonModule } from '@angular/material/button';
import { ContactService } from '../services/contact.service';
import { ReplaySubject, takeUntil } from 'rxjs';
import { ContactForm } from '../models/contact-form';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { ROUTER_TOKENS } from '../app.routes';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    MatButtonModule,
    FormsModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  readonly ROUTER_TOKENS = ROUTER_TOKENS;

  readonly cartService = inject(CartService);
  readonly router = inject(Router);

  readonly cartItemsPlusQuantity = this.cartService.cartItemsPlusQuantity;
  readonly subtotal = this.cartService.subtotal;
  readonly salesTax = this.cartService.salesTax;
  readonly total = this.cartService.total;

  readonly contactService = inject(ContactService);
  destroyed$ = new ReplaySubject<void>(1);

  model: ContactForm = {};
  submitted = false;
  loading = false;

  checkout() {
    this.loading = true;

    this.contactService.submitContactForm(this.model).pipe(
      takeUntil(this.destroyed$)
    ).subscribe(() => {
      this.submitted = true;
      this.loading = false;
      this.cartService.cartItems.set({});
    })
  }

  close() {
    this.router.navigate([{ outlets: { [ROUTER_TOKENS.CART]: null } }], {
      queryParamsHandling: 'merge'
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
