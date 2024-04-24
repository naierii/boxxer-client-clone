import { SocketService } from '@admin/shared/services/socket.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'lodash';
import * as moment from 'moment';
import { BaseChartDirective } from 'ng2-charts';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { enGbLocale } from 'ngx-bootstrap/locale';
import { merge, Subject } from 'rxjs';
import { share, startWith, switchMap, mapTo, tap } from 'rxjs/operators';

@Component({
  selector: 'bx-sales',
  templateUrl: './sales.component.html',
  providers: [
    {
      provide: 'SalesService',
      useClass: SocketService
    }
  ]
})
export class SalesComponent implements OnInit {
  @ViewChild(BaseChartDirective, { static: false }) chart: BaseChartDirective;
  items: any[] = [];
  showChart = false;
  public lineChartData: Array<any> = [];

  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [
        {
          position: 'left',
          id: 'y-axis-0'
        },
        {
          position: 'right',
          id: 'y-axis-1'
        }
      ]
    }
  };
  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  private queryParams = this.route.snapshot.queryParams;
  public type: string = this.queryParams.type || 'days';
  public region: string = this.queryParams.region || 'all';

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
      type: this.type,
      region: this.region
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

  private regionStream = new Subject<string>();

  regionSource$ = this.regionStream.pipe(mapTo(this.query));

  query$ = merge(this.typeSource$, this.regionSource$).pipe(share());

  bsConfig: Partial<BsDatepickerConfig>;
  constructor(
    @Inject('SalesService') public service: SocketService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    service.setup('reports/sales');
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
      this.type = params['type'] ? params['type'] : 'days';
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
        title: 'Transactions',
        value: this.calculateTotal('transactions', 0),
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
        }),
        share()
      )
      .subscribe((resp: any) => {
        this.items = resp;
        this.lineChartData = [
          {
            data: map(this.items, 'total'),
            label: 'Total Sales',
            yAxisID: 'y-axis-0'
          }
        ];
        this.lineChartLabels = map(this.items, 'date');
        if (this.chart && this.chart.chart && this.chart.chart.config) {
          this.chart.chart.config.data.labels = this.lineChartLabels;
        }
        this.showChart = true;
        this.setParams();
      });
  }

  setParams() {
    this.router.navigate([], {
      queryParams: this.query
    });
  }

  filterType(type: string) {
    this.type = type;
    this.typeStream.next(this.type);
  }

  filterRegion(region: string) {
    this.region = region;
    this.regionStream.next(this.region);
  }

  public selectedDate(value: any) {
    if (value) {
      this.fromDate = value[0];
      this.toDate = value[1];
      this.typeStream.next(this.type);
    }
  }
}
