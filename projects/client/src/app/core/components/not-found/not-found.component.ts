import { Component, OnInit, Optional, Inject } from '@angular/core';
import { PlatformService } from '@app/shared-main/services/platform.service';
import { RESPONSE } from '@nguniversal/express-engine/tokens';

@Component({
  selector: 'bx-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  constructor(
    private ps: PlatformService,
    @Optional()
    @Inject(RESPONSE)
    private response: any
  ) {}

  ngOnInit() {
    if (this.ps.isServer) {
      this.response.status(404);
    }
  }
}
