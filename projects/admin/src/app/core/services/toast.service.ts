import { Injectable } from '@angular/core';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
@Injectable()
export class ToastService {
  private toasterService: ToasterService;

  constructor(toasterService: ToasterService) {
    this.toasterService = toasterService;
  }

  showToast(type: string, title: string, message: string) {
    this.toasterService.pop(type, title, message);
  }
}
