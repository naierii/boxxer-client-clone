import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {
  loading = false;
  defaultMessage = 'Loading...';
  message: string;
  setLoading(loading: boolean, message?: string) {
    this.message = message || this.defaultMessage;
    this.loading = loading;
    if (!this.loading) {
      this.message = this.defaultMessage;
    }
  }
}
