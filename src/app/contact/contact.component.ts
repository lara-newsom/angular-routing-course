import { Component, OnDestroy, inject } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { ContactService } from '../services/contact.service';
import { ContactForm } from '../models/contact-form';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnDestroy{
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
      this.loading = false;
    })
  }

  clearForm() {
    this.submitted = false;
    this.model = {
      fullName: '',
      email: '',
      phone: '',
      comment: '',
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
