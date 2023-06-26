import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SubSectionComponent } from './sub-section/sub-section.component';

@Component({
  standalone: true,
  imports: [
    HeroSectionComponent,
    SubSectionComponent,
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
}
