import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PieService } from '../../../services/pie.service';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
  protected readonly pieService = inject(PieService);

  selectPie(id: string){
    this.pieService.setSelectedPie(id);
  }
}
