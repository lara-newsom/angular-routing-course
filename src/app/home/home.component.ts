import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SubSectionComponent } from './sub-section/sub-section.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    imports: [HeroSectionComponent, SubSectionComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
}
