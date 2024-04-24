import { Production } from '@global/models/production';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bx-production-pictures-item, [bx-production-pictures-item]',
  templateUrl: './production-pictures-item.component.html',
  styles: []
})
export class ProductionPicturesItemComponent {
  @Input() production: Production;
}
