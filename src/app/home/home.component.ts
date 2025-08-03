import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SubSectionComponent } from './sub-section/sub-section.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    imports: [HeroSectionComponent, SubSectionComponent]
})
export class HomeComponent {
}
