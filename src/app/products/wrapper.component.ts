import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BreadcrumbsComponent } from '../shared-ui/breadcrumbs/breadcrumbs.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-wrapper',
  imports: [BreadcrumbsComponent, RouterOutlet],
  templateUrl: './wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrapperComponent implements OnInit {
  ngOnInit(): void {
    console.log('Wrapper OnInit');
  }
}
