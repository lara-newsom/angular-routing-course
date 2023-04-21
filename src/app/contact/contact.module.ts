import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatButtonModule} from '@angular/material/button';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [
    ContactComponent
  ],
  exports: [
    ContactComponent,
  ],
  imports: [
    MatButtonModule,
    BrowserModule,

  ]
})
export class ContactModule { }
