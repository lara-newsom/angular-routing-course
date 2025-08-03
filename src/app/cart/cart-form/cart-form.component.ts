import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { MatButtonModule } from '@angular/material/button';
import { ContactService } from '../../services/contact.service';
import { ReplaySubject, take, takeUntil } from 'rxjs';
import { ContactForm } from '../../models/contact-form';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { CartButtonComponent } from 'src/app/shared-ui/cart-button/cart-button.component';

@Component({
  selector: 'app-cart-form',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    MatButtonModule,
    FormsModule,
    MatProgressSpinnerModule,
    CartButtonComponent
  ],
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartFormComponent {
  readonly cartService = inject(CartService);
  readonly router = inject(Router);
  readonly contactService = inject(ContactService);

  destroyed$ = new ReplaySubject<void>(1);

  model: ContactForm = {};
  submitted = signal(false);
  loading = signal(false);

  checkout() {
    this.loading.set(true);

    this.contactService.submitContactForm(this.model).pipe(
      take(1),
      takeUntil(this.destroyed$)
    ).subscribe(() => {
      this.submitted.set(true);
      this.loading.set(false);
      this.cartService.checkout();
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
