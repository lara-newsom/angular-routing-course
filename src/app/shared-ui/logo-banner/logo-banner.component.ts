import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-logo-banner',
    templateUrl: './logo-banner.component.html',
    styleUrls: ['./logo-banner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoBannerComponent {

}
