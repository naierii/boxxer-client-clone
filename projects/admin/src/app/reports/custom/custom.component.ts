import { defineLocale } from 'ngx-bootstrap/chronos';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { enGbLocale } from 'ngx-bootstrap/locale';
import { Component, OnInit, Inject } from '@angular/core';
import { SocketService } from '@admin/shared/services/socket.service';
import * as moment from 'moment';
import { merge, Subject } from 'rxjs';
import { share, mapTo, startWith, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'bx-custom',
  templateUrl: './custom.component.html',
  providers: [
    {
      provide: 'CustomService',
      useClass: SocketService
    }
  ]
})
export class CustomComponent implements OnInit {
  items: any[] = [];
  private queryParams = this.route.snapshot.queryParams;
  public production: string =
    this.queryParams.production || '5a990b752fdf140810d763af';

  nowMinus7 = this.queryParams.from
    ? moment(this.queryParams.from).toDate()
    : new Date(Date.now() - 6 * 24 * 60 * 60 * 1000);
  now = this.queryParams.to ? moment(this.queryParams.to).toDate() : new Date();
  public bsValue: any;
  public bsRangeValue: any = [this.nowMinus7, this.now];

  fromDate = this.queryParams.from
    ? moment(this.queryParams.from, 'YYYY-MM-DD')
    : moment().subtract(6, 'days');
  toDate = this.queryParams.to
    ? moment(this.queryParams.to, 'YYYY-MM-DD')
    : moment();

  get query(): any {
    return {
      from: moment(this.fromDate).format('YYYY-MM-DD'),
      to: moment(this.toDate).format('YYYY-MM-DD'),
      production: this.production
    };
  }

  public options: any = {
    locale: { format: 'DD/MM/YYYY' },
    alwaysShowCalendars: false,
    startDate: this.fromDate,
    endDate: this.toDate
  };

  private typeStream = new Subject<string>();

  typeSource$ = this.typeStream.pipe(mapTo(this.query));

  query$ = merge(this.typeSource$).pipe(share());

  bsConfig: Partial<BsDatepickerConfig>;
  constructor(
    @Inject('CustomService') public service: SocketService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    service.setup('reports/custom');
    defineLocale(enGbLocale.abbr, enGbLocale);
    this.bsConfig = Object.assign(
      {},
      {
        containerClass: 'theme-blue',
        showWeekNumbers: false,
        locale: enGbLocale.abbr
      }
    );
    route.queryParams.subscribe(params => {
      this.production = params['production']
        ? params['production']
        : '5a990b752fdf140810d763af';
      if (params['from']) {
        this.fromDate = moment(params['from'], 'YYYY-MM-DD');
      }
      if (params['to']) {
        this.toDate = moment(params['to'], 'YYYY-MM-DD');
      }
    });
  }

  ngOnInit() {
    this.getItems();
  }

  calculateTotal(key: string, decimal: number) {
    const total = this.items.reduce((prev, curr) => {
      return parseFloat(prev) + parseFloat(curr[key] || 0);
    }, 0);
    return (Math.round(total * 100) / 100).toFixed(decimal);
  }

  get totals() {
    return [
      {
        title: 'Total',
        value: `£${this.calculateTotal('total', 2)}`,
        icon: 'icon-wallet'
      },
      {
        title: 'Qty',
        value: this.calculateTotal('qty', 0),
        icon: 'icon-basket-loaded'
      }
    ];
  }

  getItems() {
    this.query$
      .pipe(
        startWith(this.query),
        switchMap((query: { type: string }) => {
          return this.service.find(this.query);
        })
      )
      .subscribe((resp: any) => {
        this.items = resp;
        this.setParams();
      });
  }

  setParams() {
    this.router.navigate([], {
      queryParams: this.query
    });
  }

  filterType(type: string) {
    this.production = type;
    this.typeStream.next(this.production);
  }

  public selectedDate(value: any) {
    if (value) {
      this.fromDate = value[0];
      this.toDate = value[1];
      this.typeStream.next(this.production);
    }
  }
}
