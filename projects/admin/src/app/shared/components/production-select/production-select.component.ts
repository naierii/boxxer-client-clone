import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { SocketService } from '@admin/shared/services/socket.service';
import { Observable } from 'rxjs';
import { ProductionType } from '@global/models/custom-setting';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bx-production-select',
  templateUrl: './production-select.component.html',
  providers: [
    {
      provide: 'CustomSettingService',
      useClass: SocketService
    }
  ]
})
export class ProductionSelectComponent {
  @Input() selectedType: any;
  @Output()
  onFilter = new EventEmitter<any>();
  productionTypes$: Observable<ProductionType[]>;
  constructor(@Inject('CustomSettingService') private service: SocketService) {
    service.setup('custom-setting');
    this.productionTypes$ = service
      .find({ $limit: 1 })
      .pipe(map((resp: any) => resp.data[0].production_types));
  }

  filterChanged(value: any) {
    this.onFilter.emit(value);
  }
}
