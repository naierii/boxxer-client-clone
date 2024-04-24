import { LoadingService } from '@admin/core/services/loading.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PagedViewComponent } from '@admin/shared/components/paged-view/paged-view.component';
import { TermService } from './../term.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { BatchService } from '@admin/shared/services/batch.service';
import { untilComponentDestroyed } from '@global/untilDestroy';

@Component({
  selector: 'bx-term-list',
  templateUrl: './term-list.component.html'
})
export class TermListComponent extends PagedViewComponent
  implements OnInit, OnDestroy {
  items: any[];
  constructor(
    protected service: TermService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected loading: LoadingService,
    private dragulaService: DragulaService,
    private batch: BatchService
  ) {
    super(service, router, route, loading);
    service.setup('term');
    const category = this.route.snapshot.params['catid'];
    this.extraParams = {
      category,
      $sort: {
        parent: 1,
        weight: 1
      }
    };
    dragulaService
      .dropModel('terms')
      .pipe(untilComponentDestroyed(this))
      .subscribe((args: any) => {
        const rowData = Array.from(args.target.children);
        rowData.forEach((row: any, index) => {
          const data = [
            'term::patch',
            row.dataset.id,
            { weight: index + this.adjustment }
          ];
          this.batch.addToBatch.next([
            ...this.batch.addToBatch.getValue(),
            data
          ]);
        });
      });
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
