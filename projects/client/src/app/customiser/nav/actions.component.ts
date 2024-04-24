import {
  AfterContentChecked,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { CustomiserOptionsService } from '@app/customiser/services/customiser-options.service';

@Component({
  selector: 'bx-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionsComponent implements OnInit, AfterContentChecked {
  @Input()
  validated = false;
  @Input()
  canDelete = false;
  @Output()
  designCancel = new EventEmitter();
  @Output()
  designDelete = new EventEmitter();
  @Output()
  designSave = new EventEmitter();

  constructor(
    private el: ElementRef,
    private optionsService: CustomiserOptionsService
  ) {}

  @HostBinding('class.showDelete')
  get showDelete() {
    return this.canDelete;
  }

  ngOnInit() {
    this.setActionBarHeight();
  }

  ngAfterContentChecked() {
    this.setActionBarHeight();
  }

  setActionBarHeight() {
    this.optionsService.actionBarHeight.next(
      this.el.nativeElement.clientHeight
    );
  }

  save() {
    this.designSave.emit();
  }

  delete() {
    this.designDelete.emit();
  }

  cancel() {
    this.designCancel.emit();
  }
}
