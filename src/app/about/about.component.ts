import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbsComponent } from "../shared-ui/breadcrumbs/breadcrumbs.component";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BreadcrumbsComponent],
})
export class AboutComponent {
}
