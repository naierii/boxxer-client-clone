import { SeoService } from './../core/services/seo.service';
import { tap } from 'rxjs/operators';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { Page } from '@global/models/page';
import { Observable } from 'rxjs';
import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ApiService } from '@app/core/services/api.service';

@Component({
  selector: 'bx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  home$: Observable<Page>;
  constructor(private api: ApiService, private seo: SeoService) {}

  ngOnInit() {
    // this.home$ = this.api.get('page', 'home').pipe(
    //   untilComponentDestroyed(this),
    //   tap((resp: Page) => {
    //     this.seo.setMetaAndLinks(resp.title, resp.seo);
    //   })
    // );
  }

  videoOptions(key) {
    return {
      // tslint:disable-next-line:max-line-length
      mp4: `https://boxxer-images.ams3.cdn.digitaloceanspaces.com/${key}.mp4`,
    };
  }

  ngOnDestroy() {}
}
