import { ChangeDetectionStrategy, Component, input, Type } from '@angular/core';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { NgComponentOutlet, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-image-wrapper',
  imports: [BreadcrumbsComponent, NgComponentOutlet, TitleCasePipe],
  templateUrl: './image-wrapper.component.html',
  styleUrl: './image-wrapper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageWrapperComponent {
  readonly imageUrl = input.required<string>();
  readonly routePath = input.required<string>();
  readonly component = input.required<Type<any> | null>();
}
