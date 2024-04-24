import {
  Component,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import {
  BsDatepickerDirective,
  BsDatepickerConfig,
} from 'ngx-bootstrap/datepicker';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'bx-dp-mobile',
  templateUrl: './dp-mobile.component.html',
  styles: [],
})
export class DpMobileComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() controlName: string;
  @Input() bsConfig: Partial<BsDatepickerConfig>;
  @ViewChild('dp', { static: false }) private _picker: BsDatepickerDirective;
  @Output() bsValueChange: EventEmitter<Date> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onShowPicker(event) {
    const dayHoverHandler = event.dayHoverHandler;
    const hoverWrapper = (hoverEvent) => {
      const { cell, isHovered } = hoverEvent;

      if (
        isHovered &&
        !!navigator.platform &&
        /iPad|iPhone|iPod/.test(navigator.platform) &&
        'ontouchstart' in window
      ) {
        (this._picker as any)._datepickerRef.instance.daySelectHandler(cell);
      }

      return dayHoverHandler(hoverEvent);
    };
    event.dayHoverHandler = hoverWrapper;
  }

  valueChange(date: Date) {
    this.bsValueChange.emit(date);
  }
}
