import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
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
