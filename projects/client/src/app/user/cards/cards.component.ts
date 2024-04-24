import { Observable, of } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { map, switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteComponent } from '@app/user/confirm-delete/confirm-delete.component';
import { untilComponentDestroyed } from '@global/untilDestroy';

@Component({
  selector: 'bx-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, OnDestroy {
  sources$: Observable<any>;
  constructor(private api: ApiService, private dialog: MatDialog) {}

  ngOnInit() {
    this.sources$ = this.api
      .find('users/cards', { type: 'source' })
      .pipe(map((resp: any) => resp.data));
  }

  formatCardName(brand: string) {
    const formatted = brand.replace(' ', '-').toLowerCase();
    if (formatted === 'american-express') {
      return 'cc-amex';
    } else {
      return `cc-${formatted}`;
    }
  }

  deleteCard(card: any) {
    const modalRef = this.dialog.open(ConfirmDeleteComponent, {
      data: { title: `Card ending ${card.last4}` },
      minWidth: '300px',
      autoFocus: false
    });
    modalRef
      .afterClosed()
      .pipe(
        switchMap(confirmed =>
          confirmed ? this.api.remove('users/cards', card.id) : of(null)
        ),
        untilComponentDestroyed(this)
      )
      .subscribe(result => {
        if (result) {
          this.sources$ = this.sources$.pipe(
            map(cards => cards.filter(c => c.id !== card.id))
          );
        }
      });
  }

  ngOnDestroy() {}
}
