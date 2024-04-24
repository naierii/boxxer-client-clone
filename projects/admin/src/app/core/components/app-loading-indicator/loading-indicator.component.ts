import { LoadingService } from './../../services/loading.service';

import { Component } from '@angular/core';

@Component({
  selector: 'bx-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent {
  constructor(public loading: LoadingService) {}
}
