import { Component, OnInit, Inject } from '@angular/core';
import { SocketService } from '@admin/shared/services/socket.service';
import * as moment from 'moment';
import { Router, ActivatedRoute, Scroll } from '@angular/router';
import { Subject, merge } from 'rxjs';
import {
  map,
  share,
  startWith,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  filter,
  tap,
} from 'rxjs/operators';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { enGbLocale } from 'ngx-bootstrap/locale';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'bx-expenses-list',
  templateUrl: './expenses-list.component.html',
  providers: [
    {
      provide: 'ExpenseReportService',
      useClass: SocketService,
    },
    {
      provide: 'ExpenseService',
      useClass: SocketService,
    },
  ],
})
export class ExpensesListComponent implements OnInit {
  dateRangeForm: FormGroup;
  items: any[] = [];
  scrollPosition: [number, number];
  public queryParams = this.route.snapshot.queryParams;
  public type: string = this.queryParams.type || 'days';
  nowMinus7 = this.queryParams.from
    ? moment(this.queryParams.from).toDate()
    : new Date(moment().startOf('month').format());
  now = this.queryParams.to
    ? moment(this.queryParams.to).toDate()
    : new Date(moment().endOf('month').format());
  public bsValue: any;
  public bsRangeValue: any = [this.nowMinus7, this.now];
  public bsFrom: any = this.nowMinus7;
  public bsTo: any = this.now;
  category: string;
  parentCategory: string;
  company: string;
  vat: boolean;
  source: string;
  search: string;
  data: any;
  fromDate = this.queryParams.from
    ? moment(this.queryParams.from, 'YYYY-MM-DD')
    : moment().startOf('month');
  toDate = this.queryParams.to
    ? moment(this.queryParams.to, 'YYYY-MM-DD')
    : moment().endOf('month');

  get query(): any {
    return {
      from: moment(this.fromDate).format('YYYY-MM-DD'),
      to: moment(this.toDate).format('YYYY-MM-DD'),
      category: this.category,
      source: this.source,
      vat: this.vat,
      search: this.search,
    };
  }

  private categoryStream = new Subject<string>();

  categorySource$ = this.categoryStream.pipe(
    map((type) => {
      return this.query;
    })
  );

  private sourceStream = new Subject<string>();

  sourceSource$ = this.sourceStream.pipe(
    map((type) => {
      return this.query;
    })
  );

  private searchStream = new Subject<string>();

  searchSource$ = this.searchStream.pipe(
    map((type) => {
      return this.query;
    })
  );

  private vatStream = new Subject<string>();

  vatSource$ = this.vatStream.pipe(
    map((type) => {
      return this.query;
    })
  );

  routedata$ = this.route.data.pipe(
    tap((data) => {
      this.company = data.company;
      this.parentCategory = data.category;
    }),
    map((type) => {
      return this.query;
    })
  );

  query$ = merge(
    this.sourceSource$,
    this.categorySource$,
    this.searchSource$,
    this.vatSource$,
    this.routedata$
  ).pipe(share());

  bsConfig: Partial<BsDatepickerConfig>;
  constructor(
    private fb: FormBuilder,
    @Inject('ExpenseReportService') protected service: SocketService,
    @Inject('ExpenseService') protected expenseService: SocketService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    if (this.queryParams['category']) {
      this.category = this.queryParams['category'];
    }
    if (this.queryParams['source']) {
      this.source = this.queryParams['source'];
    }
    service.setup('reports/expenses');
    expenseService.setup('expense');
    defineLocale(enGbLocale.abbr, enGbLocale);
    this.bsConfig = Object.assign(
      {},
      {
        containerClass: 'theme-blue',
        showWeekNumbers: false,
        locale: enGbLocale.abbr,
      }
    );
  }

  ngOnInit() {
    this.dateRangeForm = this.fb.group({
      from: [this.nowMinus7],
      to: [this.now],
    });
    this.data = this.route.snapshot.data;
    this.getItems();
  }

  calculateTotal(key: string, decimal: number) {
    const total = this.items.reduce((prev, curr) => {
      return parseFloat(prev) + parseFloat(curr[key] || 0);
    }, 0);
    return ((total * 100) / 100).toFixed(2);
  }

  getItems() {
    this.query$
      .pipe(
        startWith(this.query),
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((query: any) => {
          query = { ...query, company: this.company };
          return this.service.find(query);
        }),
        switchMap((resp: any) => {
          this.items = resp;
          this.setParams();
          return this.router.events;
        }),
        filter((e) => e instanceof Scroll)
      )
      .subscribe((e) => {
        if ((e as Scroll).position) {
          this.scrollPosition = (e as Scroll).position;
        } else {
          this.scrollPosition = [0, 0];
        }
      });
  }

  getSources() {
    if (this.company === 'Boxxerworld') {
      return [
        'Cash',
        'Stripe',
        'Paypal',
        'Boxxer UK',
        'Transferwise',
        'Skrill',
        'Thai Bank',
        'UK Bank',
        'Bank T-fer',
        'Credit Card',
      ];
    } else {
      return ['Bank', 'Cash', 'Credit Card'];
    }
  }

  setParams() {
    this.router.navigate([], {
      queryParams: this.query,
    });
  }

  filterCategory(value: any) {
    this.category = value;
    this.categoryStream.next(value);
  }

  filterSource(value: any) {
    this.source = value;
    this.sourceStream.next(value);
  }

  filterVat(value: any) {
    this.vat = value;
    this.vatStream.next(value);
  }

  searchAmount(value: any) {
    this.search = value;
    this.searchStream.next(value);
  }

  public selectedDate(value: any) {
    if (value) {
      this.fromDate = value[0];
      this.toDate = value[1];
      this.sourceStream.next(this.source);
    }
  }

  selectedFromDate(value: any) {
    if (value) {
      this.fromDate = value;
      if (!this.toDate) {
        this.toDate = value;
      }
      this.sourceStream.next(this.source);
    }
  }

  selectedToDate(value: any) {
    if (value) {
      this.toDate = value;
      this.sourceStream.next(this.source);
    }
  }

  deleteConfirm(id) {
    this.expenseService.remove(id);
    this.categoryStream.next('');
  }
}
