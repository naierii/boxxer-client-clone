import { Component, Input } from '@angular/core';
@Component({
  selector: 'bx-dashboard-add, [bx-dashboard-add]',
  templateUrl: './dashboard-add.component.html',
  styleUrls: ['./dashboard-add.component.scss']
})
export class DashboardAddComponent {
  @Input()
  title: string;
  constructor() {}
}
