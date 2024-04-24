import { tap } from 'rxjs/operators';
import { Image } from '@global/models/image';
import { SocketService } from '@admin/shared/services/socket.service';
import { ToastService } from '@admin/core/services/toast.service';
import { LoadingService } from '@admin/core/services/loading.service';
import { FeathersSocketService } from '@admin/shared/services/feathers.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService extends SocketService {
  images: Image[] = [];
  image: Image;
  service: any;
  constructor(
    protected feathers: FeathersSocketService,
    protected loading: LoadingService,
    protected router: Router,
    protected toast: ToastService
  ) {
    super(feathers, loading, router, toast);
    this.service = this.setup('image');
  }

  addImage(image: Image) {
    this.images.push(image);
  }

  removeImage(image: Image) {
    return from(this.service.remove(image._id)).pipe(
      tap(() => (this.images = this.images.filter((i) => i._id !== image._id)))
    );
  }
}
