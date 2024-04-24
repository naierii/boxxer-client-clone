import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '@app/core/services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bx-page-popup',
  templateUrl: './page-popup.component.html',
  styleUrls: ['./page-popup.component.scss']
})
export class PagePopupComponent implements OnInit {
  public page$: Observable<any>;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.page$ = this.api.get(
      'page',
      this.data.slug,
      {
        $select: ['title', 'body']
      },
      false
    );
  }
}
