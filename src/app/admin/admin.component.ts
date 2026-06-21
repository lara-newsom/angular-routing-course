import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BreadcrumbsComponent } from '../shared-ui/breadcrumbs/breadcrumbs.component';
import { MatButton } from '@angular/material/button';
import { User } from '../models/user';

@Component({
  selector: 'app-admin',
  imports: [BreadcrumbsComponent, MatButton],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent {
  user = input.required<User>();

  readonly CELEBRATE_WORDS = [
    'YIPPEE!!!',
    'Hooray',
    'I am AWESOME',
    'Awesome',
    'Fantastic',
    'Fabulous',
    'Brilliant',
    'Superb',
    'Excellent',
  ];
  index = 0;

  celebrate(){
    console.log(this.CELEBRATE_WORDS[this.index]);
    this.index = (this.index + 1) % this.CELEBRATE_WORDS.length;
  }
}
