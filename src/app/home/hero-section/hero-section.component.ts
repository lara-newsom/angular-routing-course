import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogoBannerComponent } from '../../shared-ui/logo-banner/logo-banner.component';

@Component({
    selector: 'app-hero-section',
    templateUrl: './hero-section.component.html',
    imports: [LogoBannerComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  images = [
    '../../assets/images/hero-1.png',
    '../../assets/images/hero-2.png',
    '../../assets/images/hero-3.png',
  ];

  imageIndex = 0;

  changeImage(index: number) {
    this.imageIndex = index;
  }

}
