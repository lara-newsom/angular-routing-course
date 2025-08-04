import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, inject } from '@angular/core';

import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { ContactService } from '../services/contact.service';
import { ContactForm } from '../models/contact-form';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BreadcrumbsComponent } from '../shared-ui/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    BreadcrumbsComponent
],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnDestroy, OnInit{
  @Input() userHello = '';
  readonly contactService = inject(ContactService);
  destroyed$ = new ReplaySubject<void>(1);

  model: ContactForm = {
    fullName: '',
    email: '',
    phone: '',
    comment: '',
  };
  submitted = false;
  loading = false;

  submitForm(model: ContactForm) {
    this.submitted = true;
    this.loading = true;

    this.contactService.submitContactForm(model).pipe(
      takeUntil(this.destroyed$)
    ).subscribe(() => {
      this.contactService.canDeactivate.set(true);
      this.loading = false;
    })
  }

  clearForm() {
    this.contactService.canDeactivate.set(true);
    this.submitted = false;
    this.model = {
      fullName: '',
      email: '',
      phone: '',
      comment: '',
    }
  }

  ngOnInit() {
    this.contactService.canDeactivate.set(false);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
