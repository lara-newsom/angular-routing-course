import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PieService } from '../../../services/pie.service';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-detail-view',
    templateUrl: './detail-view.component.html',
    styleUrls: ['./detail-view.component.scss'],
    imports: [MatButton],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailViewComponent {
  protected readonly pieService = inject(PieService);
}
