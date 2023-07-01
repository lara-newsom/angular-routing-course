import { Component } from '@angular/core';
import { HeroSectionComponent } from '../home/hero-section/hero-section.component';
import { SubSectionComponent } from '../home/sub-section/sub-section.component';

@Component({
  selector: 'app-home-updated',
  standalone: true,
  imports: [
    HeroSectionComponent,
    SubSectionComponent
  ],
  templateUrl: './home-updated.component.html',
  styleUrls: ['./home-updated.component.css']
})
export class HomeUpdatedComponent {

}
