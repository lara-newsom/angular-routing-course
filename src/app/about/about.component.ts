import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MESSAGE_SERVICE } from '../services/message.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly messageService = inject(MESSAGE_SERVICE, {optional: true});
}
