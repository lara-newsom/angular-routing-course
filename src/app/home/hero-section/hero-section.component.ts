import { Component } from '@angular/core';
import { SubHeroLogoComponent } from 'src/app/shared-ui/sub-hero-logo/sub-hero-logo.component';

@Component({
  standalone: true,
  imports: [
    SubHeroLogoComponent,
  ],
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  image = '../../assets/images/hero-1.png';
}
