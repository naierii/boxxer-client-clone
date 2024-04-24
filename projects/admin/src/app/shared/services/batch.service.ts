import { debounceTime, switchMap } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { SocketService } from '@admin/shared/services/socket.service';
import { ToastService } from '@admin/core/services/toast.service';

@Injectable({
  providedIn: 'root'
})
export class BatchService {
  addToBatch = new BehaviorSubject<any[]>([]);
  constructor(private service: SocketService, private toast: ToastService) {
    service.setup('batch');
    service.loading_enabled = false;
    this.addToBatch
      .pipe(
        debounceTime(1000),
        switchMap((resp: any) => {
          if (resp && resp.length) {
            return this.service.create({ type: 'parallel', call: resp });
          } else {
            return of([]);
          }
        })
      )
      .subscribe((resp: any) => {
        if (resp && resp.data) {
          this.toast.showToast(
            'success',
            'Updated',
            `List order has been updated`
          );
          this.addToBatch.next([]);
        }
      });
  }
}
