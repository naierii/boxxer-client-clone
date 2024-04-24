import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Inject,
  ChangeDetectorRef,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';
import { SocketService } from '@admin/shared/services/socket.service';
import {
  tap,
  distinctUntilChanged,
  debounceTime,
  switchMap,
  filter
} from 'rxjs/operators';
import { untilComponentDestroyed } from '@global/untilDestroy';

@Component({
  selector: 'bx-ng-select-api',
  templateUrl: './ng-select-api.component.html',
  providers: [
    {
      provide: 'SearchService',
      useClass: SocketService
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgSelectApiComponent implements OnInit, OnDestroy {
  @Input()
  query: any;
  @Input()
  endpoint: string;
  @Input()
  data = true;
  @Input()
  group: string;
  itemTypeahead = new EventEmitter<string>();
  dropDownItems = [];
  itemLoading = false;
  constructor(
    @Inject('SearchService') protected service: SocketService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.service.setup(this.endpoint);
    this.itemSearch();
  }

  private itemSearch() {
    this.itemTypeahead
      .pipe(
        tap(() => (this.itemLoading = true)),
        untilComponentDestroyed(this),
        distinctUntilChanged(),
        debounceTime(1000),
        filter(term => term !== '' && term !== null),
        switchMap(term => {
          return this.service.find(
            {
              ...this.query,
              $search: term
            },
            false
          );
        })
      )
      .subscribe(
        (x: any) => {
          this.dropDownItems = x.data ? x.data : x;
          if (this.group) {
            const resolvePath = (
              object: any,
              path: string,
              defaultValue?: any
            ) =>
              path
                .split('.')
                .reduce((o, p) => (o ? o[p] : defaultValue), object);
            this.dropDownItems = this.dropDownItems.map(p => {
              p.group = resolvePath(p, this.group);
              return p;
            });
          }

          this.itemLoading = false;
          this.cd.markForCheck();
        },
        err => {
          this.dropDownItems = [];
        }
      );
  }
  ngOnDestroy() {}
}
