import { Component, OnInit, Input, OnDestroy, Inject } from '@angular/core';
import { Order } from '@global/models/order';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { Observable, fromEvent } from 'rxjs';
import { TINY_NOMENUS } from '@admin/tinymce';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { SocketService } from '@admin/shared/services/socket.service';
import { OrderEditService } from '../order-edit.service';

@Component({
  selector: 'bx-order-comments',
  templateUrl: './order-comments.component.html',
  providers: [
    {
      provide: 'CommentService',
      useClass: SocketService
    }
  ]
})
export class OrderCommentsComponent implements OnInit, OnDestroy {
  @Input()
  order: Order;
  @Input()
  line_item: string;
  commentForm: FormGroup;
  comments$: Observable<any[]>;
  tinymce: any;
  constructor(
    @Inject('CommentService') private commentService: SocketService,
    private fb: FormBuilder,
    private editService: OrderEditService
  ) {
    this.tinymce = TINY_NOMENUS;
    this.commentService.setup('order-comment');
    fromEvent(this.commentService.service, 'created')
      .pipe(untilComponentDestroyed(this))
      .subscribe((resp: any) => {
        if (
          (this.line_item &&
            resp.line_item &&
            resp.line_item === this.line_item &&
            resp.order === editService.order._id) ||
          (!this.line_item && resp.order === editService.order._id)
        ) {
          this.comments$ = this.comments$.pipe(
            map(comments => {
              comments.unshift(resp);
              return comments;
            })
          );
        }
      });
  }

  ngOnInit() {
    const query: any = {
      order: this.order._id,
      $sort: { createdAt: -1 },
      $limit: 25
    };
    if (this.line_item) {
      query.line_item = this.line_item;
    }
    this.comments$ = this.commentService
      .find(query)
      .pipe(map((c: any) => c.data));
    this.commentForm = this.fb.group({
      order: [this.order._id],
      comment: [null, Validators.required],
      line_item: [this.line_item ? this.line_item : null]
    });
  }

  addComment(data: any) {
    if (data.comment === '') {
      return;
    }
    this.commentService
      .create(data)
      .pipe(untilComponentDestroyed(this))
      .subscribe(() => {
        this.commentForm.get('comment').setValue(null);
        if (!this.line_item) {
          this.commentForm.get('line_item').setValue(null);
        }
      });
  }

  ngOnDestroy() {}
}
