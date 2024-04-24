import { switchMap, debounceTime, takeUntil } from 'rxjs/operators';
import { SocketService } from '@admin/shared/services/socket.service';
import { Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'bx-publishing-form',
  templateUrl: './publishing-form.component.html'
})
export class PublishingFormComponent implements OnInit, OnDestroy {
  @Input()
  parentForm: FormGroup;
  @Input()
  item: any;
  @Input()
  hasSlug: boolean;
  @Input()
  endpoint: string;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private service: SocketService) {
    service.endpoint = this.endpoint;
  }

  ngOnInit() {
    this.service.endpoint = this.endpoint;
    this.parentForm.addControl(
      'published',
      new FormControl(this.item && this.item.published === false ? false : true)
    );
    if (this.hasSlug) {
      this.parentForm.addControl(
        'slug',
        new FormControl(this.item ? this.item.slug : null)
      );
      this.parentForm.controls.slug.valueChanges
        .pipe(
          debounceTime(500),
          switchMap(value =>
            this.service.find(
              {
                slug: value
              },
              false
            )
          ),
          takeUntil(this.destroy$)
        )
        .subscribe((resp: any) => {
          if (
            resp.total === 0 ||
            this.item.slug === this.parentForm.controls.slug.value
          ) {
            this.parentForm.controls.slug.setErrors(null);
          } else {
            this.parentForm.controls.slug.setErrors({ slug_taken: true });
          }
        });
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
