import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { switchMap } from 'rxjs/operators';

import { HelpService } from './help.service';

@Component({
  selector: 'bx-help-detail',
  templateUrl: './help-detail.component.html',
  styleUrls: ['./help-detail.component.scss']
})
export class HelpDetailComponent implements OnInit, OnDestroy {
  page: any;
  constructor(
    private helpService: HelpService,
    private route: ActivatedRoute,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params: any) => {
          return this.helpService.getPage(params['slug']);
        }),
        untilComponentDestroyed(this)
      )
      .subscribe(resp => {
        this.page = resp;
        const name: MetaDefinition = {
          name: 'description',
          content: resp.meta
        };
        this.metaService.updateTag(name);
      });
  }

  ngOnDestroy() {}
}
