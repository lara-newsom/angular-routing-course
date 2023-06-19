import { Injectable } from '@angular/core';
import { ContactForm } from '../models/contact-form';
import { first, tap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  submitContactForm(model: ContactForm){
    return timer(3000).pipe(
      tap(() => console.log('Contact Us Submitted:', model)),
      first()
    )
  }
}
