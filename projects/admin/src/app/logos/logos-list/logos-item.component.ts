import { Subject } from 'rxjs';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  Inject,
  OnDestroy
} from '@angular/core';
import { Logo } from '@global/models/logo';
import { SocketService } from '@admin/shared/services/socket.service';

@Component({
  selector: 'bx-logos-item, [bx-logos-item]',
  templateUrl: './logos-item.component.html',
  providers: [
    {
      provide: 'LogoService',
      useClass: SocketService
    }
  ]
})
export class LogosItemComponent implements OnDestroy {
  @Input() item: Logo;
  @Input() index: number;
  @Input() page: number;
  @Input() limit: number;
  @Output() onDeleted = new EventEmitter<string>();
  updateWeight = new Subject<boolean>();

  constructor(@Inject('LogoService') protected service: SocketService) {
    service.setup('logo');
    service.loading_enabled = false;
  }
  get adjustment() {
    return (this.page - 1) * this.limit;
  }

  delete(id: string) {
    this.onDeleted.emit(id);
  }

  ngOnDestroy() {}
}
