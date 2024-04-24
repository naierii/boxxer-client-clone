import { FeathersSocketService } from '@admin/shared/services/feathers.service';
import { Injectable, ErrorHandler } from '@angular/core';
import { environment } from '@env/environment';

@Injectable()
export class CustomErrorService implements ErrorHandler {
  constructor(private feathers: FeathersSocketService) {}
  handleError(error: any): void {
    const err = error.originalError || error;
    if (err && err.code === 401 && err.type === 'FeathersError') {
      // this.feathers.authenticate();
    }
    if (!environment.production && err) {
      console.log('dev err', err);
    }
  }
}
