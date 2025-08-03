import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    imports: [MatButton],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {

}
