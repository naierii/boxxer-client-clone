import { PlatformService } from '@app/shared-main/services/platform.service';
import { LoadingService } from '@app/core/modules/loading/loading.service';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { CustomProduct } from '@global/models/custom-product';
import { ActivatedRoute } from '@angular/router';
import { CustomiserOptionsService } from './services/customiser-options.service';
import {
  Component,
  OnDestroy,
  OnInit,
  Renderer2,
  HostListener,
  ViewChild
} from '@angular/core';
import { DesignService } from './services/design.service';
import { TourService } from 'ngx-tour-md-menu';
import { ToolbarComponent } from '@app/customiser/nav/toolbar.component';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import * as fromCustomiser from './reducers';
import * as design from './actions/design';

@Component({
  selector: 'bx-customiser',
  templateUrl: './customiser.component.html',
  styleUrls: ['./customiser.component.scss']
})
export class CustomiserComponent implements OnInit, OnDestroy {
  @ViewChild('toolbar', { static: true })
  toolbar: ToolbarComponent;
  product: CustomProduct;
  constructor(
    public designService: DesignService,
    public optionsService: CustomiserOptionsService,
    public tourService: TourService,
    private renderer: Renderer2,
    private location: Location,
    private route: ActivatedRoute,
    private loading: LoadingService,
    private store: Store<fromCustomiser.State>,
    private ps: PlatformService
  ) {
    this.optionsService
      .product$()
      .pipe(untilComponentDestroyed(this))
      .subscribe((product: CustomProduct) => (this.product = product));
    this.designService.selectedObject = null;
    this.tourService.initialize([
      {
        anchorId: 'start.tour',
        content:
          // tslint:disable-next-line:max-line-length
          '<p>Please take a few mins to get familiar with our new customiser.<br>You can now create even better fight-wear designs with lots of new options.</p>',
        placement: 'below',
        title: 'Guided Tour'
      },
      {
        anchorId: 'your.design',
        content:
          // tslint:disable-next-line:max-line-length
          `<p>As you complete the various steps you'll see your design take shape here. Any names, graphics, or flags that you add can be repositioned by dragging, and resized and rotated using the sliders.</p>`,
        placement: 'below',
        title: 'Your Design'
      },
      {
        anchorId: 'template.options',
        content:
          // tslint:disable-next-line:max-line-length
          '<p>In OPTIONS  you can save, compare and edit designs for later. You need to create an account to do this.</p><p>Save your size, past designs, addresses and payment details for your next order. Managers can even create profiles for different boxers.</p>',
        placement: 'below',
        title: 'Hassel free'
      },
      {
        anchorId: 'design.panels.0',
        content:
          // tslint:disable-next-line:max-line-length
          `<p>Here's your chance to really stand out from the crowd. For wow factor go for sequins, high shine (wet look) or one of our unique prints. Fashionistas may prefer short fur or uber cool leatherette. On a budget? Then classic satin is no.1.</p>`,
        placement: 'above',
        title: 'Make a statement'
      },
      {
        anchorId: 'design.names',
        content:
          // tslint:disable-next-line:max-line-length
          '<p>Choose colours and finishes that let your fight name pop. Make sure you complete each step then save & move your name into the perfect spot. Printed names are simple and low-cost. If you want to add extras like crystals and 3D finishes, you must choose an embroidery name. Names can be easily edited once in place. Contrasting coloured patches are optional.</p>',
        placement: 'above',
        title: 'Names - Let the crowd shout it!'
      },
      {
        anchorId: 'design.flags',
        content:
          // tslint:disable-next-line:max-line-length
          '<p>Let the crowd know you are representing by adding national flags anywhere on your kit.</p>',
        placement: 'above',
        title: 'Show your pride'
      },
      {
        anchorId: 'design.graphics',
        content:
          // tslint:disable-next-line:max-line-length
          '<p>Choose from any of our popular graphics and simply drop, move and resize. We can re-colour the graphics for you during production if you enter your desired colours in the box provided.</p>',
        placement: 'above',
        title: 'Popular Graphics'
      },
      {
        anchorId: 'design.uploads',
        content:
          // tslint:disable-next-line:max-line-length
          `<p>Drop, move and resize as many logos as you need! Don't worry if your logos have a white or black box around them, we will remove this if you click the box provided. Logos will be printed. If you need embroidery we will bill you the additional cost depending on size and complexity after we get your order.</p>`,
        placement: 'above',
        title: 'Your logos'
      },
      {
        anchorId: 'design.sizing',
        content:
          // tslint:disable-next-line:max-line-length
          `<p><strong>Sizing</strong><br>For clothing orders, make sure you enter a correct height and weight so we can check your sizing. Our website will suggest a size but you can change this if you wish. Kids and youth sizes get a discount and really big sizes cost a little extra.</p><p><strong>Production Speed</strong><br>If you need your items made fast, choose Express Production and enter your fight date in the special instructions. <strong>Courier time is extra</strong> (you will choose "express" or "free, standard" at checkout)</p>`,
        placement: 'above',
        title: 'Perfect size & fit on time'
      },
      {
        anchorId: 'boxxer.logo',
        content:
          // tslint:disable-next-line:max-line-length
          `<p>We rely on others knowing where you got your gear to keep our prices reasonable. For this reason all items must carry a boxxer logo but you can choose the location. If you really cant have any logo, you can pay a small fee to have it removed.</p>`,
        placement: 'below',
        title: 'OUR BOXXER LOGO'
      },
      {
        anchorId: 'add.cart',
        content:
          // tslint:disable-next-line:max-line-length
          `<p>Once you've completed all the required steps you can add to your cart.</p>`,
        placement: 'above',
        title: 'Add to Cart'
      }
    ]);
  }

  @HostListener('click')
  @HostListener('touchstart')
  clickout() {
    this.toolbar.closeMenu();
  }

  ngOnInit() {
    this.loading.show('Loading design...', '0px');
    const params = this.route.snapshot.queryParams;
    const data = this.route.snapshot.data;
    if (
      (data.design._id && this.designService.editOrder) ||
      (data.design && params.chat_help)
    ) {
      this.location.replaceState(`/customiser/${this.product._id}/design`);
    }
    if (this.ps.isBrowser && this.ps.getNativeDocument()) {
      this.renderer.addClass(this.ps.getNativeDocument().body, 'modal');
    }
  }

  ngOnDestroy() {
    this.store.dispatch(new design.ResetDesign(this.optionsService.getLogo()));
    if (this.ps.isBrowser && this.ps.getNativeDocument()) {
      this.renderer.removeClass(this.ps.getNativeDocument().body, 'modal');
    }
  }
}
