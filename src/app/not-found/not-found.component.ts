import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogoBannerComponent } from '../shared-ui/logo-banner/logo-banner.component';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    imports: [LogoBannerComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {

}
