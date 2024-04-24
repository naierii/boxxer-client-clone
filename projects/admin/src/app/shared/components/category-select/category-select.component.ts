import { SocketService } from '@admin/shared/services/socket.service';
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Term } from '@global/models/term';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'bx-category-select',
  templateUrl: './category-select.component.html',
  providers: [
    {
      provide: 'CategoryService',
      useClass: SocketService
    }
  ]
})
export class CategorySelectComponent implements OnInit, OnChanges {
  @Input()
  parentForm: FormGroup;
  @Input()
  item: any;
  @Input()
  category: any;
  @Input()
  nested = true;
  @Input()
  onlyParent = false;
  @Input()
  grouped = true;
  @Input()
  parent: string;
  @Input()
  field = 'category';
  @Input()
  multiple = false;
  @Input()
  none = false;
  @Input()
  published: boolean;
  @Output()
  onFilter = new EventEmitter<any>();

  @Input()
  selectedTerm: any;

  terms$: Observable<Term[]>;
  query: any;
  constructor(@Inject('CategoryService') private service: SocketService) {
    service.setup('term');
  }

  ngOnInit() {
    if (this.parentForm) {
      this.parentForm.addControl(
        this.field,
        new FormControl(
          this.item && this.item[this.field] ? this.item[this.field]._id : null,
          [Validators.required]
        )
      );
      this.parentForm.updateValueAndValidity();
    }

    this.query = {
      category: this.category,
      $limit: 100
    };

    if (this.nested || this.onlyParent) {
      this.query.parent = null;
    }

    if (this.parent) {
      this.query.parent = this.parent;
    }
    if (this.published) {
      this.query.published = true;
    }

    this.terms$ = this.service.find(this.query).pipe(
      map((resp: any) => resp.data),
      tap(resp => {
        if (this.parentForm && !this.parentForm.get(this.field).value) {
          this.parentForm.get(this.field).setValue(resp[0]._id);
        }
      })
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.parent) {
      this.query = {
        ...this.query,
        parent: changes.parent.currentValue
      };

      this.terms$ = this.service.find(this.query).pipe(
        map((resp: any) => resp.data),
        tap(resp => {
          if (this.parentForm) {
            this.parentForm.get(this.field).setValue(resp[0]._id);
          }
        })
      );
    }
  }

  filterChanged(value: any) {
    this.onFilter.emit(value);
  }
}
