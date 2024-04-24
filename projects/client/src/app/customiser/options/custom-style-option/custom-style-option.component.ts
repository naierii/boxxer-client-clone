import { CustomDesign } from '@global/models/custom-design';
import { Observable } from 'rxjs';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeInAnimation } from '@app/route.animation';
import {
  CustomProductStyle,
  CustomStyle,
} from '@global/models/custom-product-style';
import { untilComponentDestroyed } from '@global/untilDestroy';

import { CustomiserOptionsService } from './../../services/customiser-options.service';
import { DesignService } from './../../services/design.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'bx-custom-style-option',
  templateUrl: './custom-style-option.component.html',
  styleUrls: [
    './custom-style-option.component.scss',
    './../../scss/options.scss',
  ],
  animations: [fadeInAnimation],
})
export class CustomStyleOptionComponent implements OnInit, OnDestroy {
  @HostBinding('@fadeInAnimation')
  get slideIn() {
    return '';
  }
  design: CustomDesign;
  selectedOption: CustomStyle;
  style: CustomProductStyle;
  style$: Observable<CustomProductStyle>;
  constructor(
    private optionsService: CustomiserOptionsService,
    private designService: DesignService,
    private route: ActivatedRoute
  ) {}

  get validated() {
    return this.selectedOption;
  }

  ngOnInit() {
    this.loadStyles();
  }

  loadStyles() {
    this.style$ = this.route.data.pipe(
      untilComponentDestroyed(this),
      switchMap((data: any) => {
        this.design = data.design;
        return this.route.params;
      }),
      switchMap((params: any) => this.optionsService.getStyle(params['id'])),
      tap((style: CustomProductStyle) => {
        this.style = style;
        this.selectedOption = this.selectedOption
          ? this.selectedOption
          : this.design[style.type.toLowerCase()];
      })
    );
  }

  optionSelected(option: CustomStyle) {
    this.selectedOption = option;
  }

  save() {
    this.designService.saveOption(true, {
      [this.style.type.toLowerCase()]: this.selectedOption,
    });
  }

  cancel() {
    this.designService.backToMenu();
  }

  ngOnDestroy() {}
}
