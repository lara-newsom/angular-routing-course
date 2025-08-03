import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
    selector: 'app-sub-section',
    templateUrl: './sub-section.component.html',
    styleUrls: ['./sub-section.component.scss'],
    imports: [CardComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubSectionComponent {

}
