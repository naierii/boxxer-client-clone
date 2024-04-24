import { SocketService } from '@admin/shared/services/socket.service';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ImageService } from '../../../core/services/image.service';
import {
  Component,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  Inject,
} from '@angular/core';
import { Image } from '@global/models/image';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { StateService } from '@admin/core/services/state.service';

@Component({
  selector: 'bx-image-item, [bx-image-item]',
  templateUrl: './image-item.component.html',
  providers: [
    {
      provide: 'ImageService',
      useClass: SocketService,
    },
  ],
})
export class ImageItemComponent implements OnChanges, OnDestroy {
  @Input()
  image: Image;
  @Input()
  index: number;
  updateWeight = new Subject<boolean>();
  constructor(
    public state: StateService,
    private imageService: ImageService,
    @Inject(ImageService) private service: SocketService
  ) {
    service.setup('image');
    this.updateWeight
      .pipe(
        untilComponentDestroyed(this),
        switchMap((weight: boolean) => {
          return service.update(this.image._id, { weight });
        })
      )
      .subscribe();
  }

  delete(event) {
    event.preventDefault();
    this.imageService
      .removeImage(this.image)
      .pipe(untilComponentDestroyed(this))
      .subscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.index && !changes.index.firstChange) {
      this.updateWeight.next(changes.index.currentValue);
    }
  }

  ngOnDestroy() {}
}
