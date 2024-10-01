import { PlatformService } from '@app/shared-main/services/platform.service';
import { environment } from '@env/environment';
import { CustomProduct } from '@global/models/custom-product';
import { Location } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild,
  AfterViewInit,
  Input
} from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { Router } from '@angular/router';
import { LoadingService } from '@app/core/modules/loading/loading.service';
import { CartService } from '@app/cart/cart.service';
import { CustomDesign } from '@global/models/custom-design';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { switchMap, take, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { CustomiserOptionsService } from './../services/customiser-options.service';
import { DesignService } from './../services/design.service';
import { SvgService } from './../services/svg.service';
import { Store, select, ActionsSubject } from '@ngrx/store';
import { OpenCart } from '@app/core/actions/state';
import * as fromRoot from '@app/reducers';
import * as fromCustomiser from './../reducers';
import { CustomProductSetting } from '@global/models/custom-product-setting';
import { CookieService } from '@gorniv/ngx-universal';

@Component({
  selector: 'bx-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnDestroy, AfterViewInit {
  @Input()
  product: CustomProduct;
  cartOpen$: Observable<boolean>;
  @Input() onEmptySide: boolean
  @ViewChild('customDesign', { static: false })
  customDesign: ElementRef;
  viewBox = '0 0 0 0';
  scale = 0;
  rotate = 0;
  templateLoaded = false;
  settings$: Observable<CustomProductSetting[]>;
  muay_thai$: Observable<CustomProductSetting[]>;
  design: CustomDesign;
  translateX = 0;
  translateY = 0;

  screenWidth: number;
  activeZoom = 100
  scale2 = this.activeZoom;
  zoomSize=[{name:"Fit",value:'fit'},
    {name:"Fill",value:"fill"},
    {name:"200%",value:200},
    {name:"175%",value:175},
    {name:"150%",value:150},
    {name:"125%",value:125},
    {name:"100%",value:100},
    {name:"90%",value:90},
    {name:"75%",value:75},
    {name:"50%",value:50},
    {name:"25%",value:25},
  ]
  get width(): number {
    const params = this.viewBox.split(' ');
    return parseInt(params[2], 10);
  }

  get height(): number {
    const params = this.viewBox.split(' ');
    return parseInt(params[3], 10);
  }

  get paddingBottom() {
    const padding = (this.height / this.width) * 100;
    return `${padding}%`;
  }

  get alignedViewBox() {
    return `0 0 ${this.width} ${this.height}`;
  }

  get hasDraggable() {
    if (this.cookieService.get('custom-dragged') || !this.design) {
      return false;
    }

    return (
      this.design.flags.length ||
      this.design.names.length ||
      this.design.logos.length ||
      this.design.uploads.length
    );
  }

  private wasInside = false;

  @HostListener('click')
  @HostListener('touchstart')
  clickInside() {
    this.wasInside = true;
  }

  @HostListener('document:click')
  @HostListener('document:touchstart')
  clickout() {
    if (!this.wasInside || this.onEmptySide == true) {
      this.designService.selectedObject = null;
    }
    this.wasInside = false;
  } 

   // Listener for window resize to update screen width dynamically
   @HostListener('window:resize', ['$event'])
   onResize(event: Event): void {
     this.screenWidth = window.innerWidth;
   }
  constructor(
    actionsSubj: ActionsSubject,
    public optionsService: CustomiserOptionsService,
    public svgService: SvgService,
    public designService: DesignService,
    public location: Location,
    private router: Router,
    private loading: LoadingService,
    private cart: CartService,
    private state: Store<fromRoot.State>,
    private ps: PlatformService,
    private store: Store<fromCustomiser.State>,
    private el: ElementRef,
    private cookieService: CookieService
  ) {
    this.onEmptySide=false
    actionsSubj.pipe(untilComponentDestroyed(this)).subscribe((data: any) => {
      if (data && data.type === '[Cart] Custom Success') {
        this.designService.deleteToken();
        this.router.navigate([this.product.category.slug]);
        this.state.dispatch(new OpenCart(true));
      }
      if (data && data.type === '[Cart] Admin Order Success') {
        const url = `${environment.admin}/orders/job-card/${this.designService.orderId}/${this.designService.orderItemId}`;
        this.ps.getNativeWindow().location.href = url;
      }

      if (data && data.type === 'LOAD_DESIGN') {
        this.setColours(data.payload);
      }
    });
    this.settings$ = store.pipe(select(fromCustomiser.getSettings));
    this.muay_thai$ = store.pipe(select(fromCustomiser.getMuayThai));
    this.cartOpen$ = state.pipe(select(fromRoot.getCartOpen));
    svgService.template = el;

    designService.addToCartEmitted$
      .pipe(
        switchMap(() => this.store.pipe(select(fromCustomiser.getDesign))),
        untilComponentDestroyed(this)
      )
      .subscribe(design => this.addToCart(design));
    designService.updateCartEmitted$
      .pipe(
        switchMap(() => this.store.pipe(select(fromCustomiser.getDesign))),
        untilComponentDestroyed(this)
      )
      .subscribe(design => this.updateCart(design));
    designService.updateOrderAdminEmitted$
      .pipe(
        switchMap(() => this.store.pipe(select(fromCustomiser.getDesign))),
        untilComponentDestroyed(this)
      )
      .subscribe(design => this.updateOrderAdmin(design));
  }

  showLabels() {
    return (
      this.optionsService.product.category._id === '58ac13a9dc142c612ab61fb1' ||
      this.optionsService.product.category._id === '58ac142bdc142c612ab61fb2' ||
      this.optionsService.product.category._id === '58ac145cdc142c612ab61fb3'
    );
  }

  svgData(value) {
    this.viewBox = value.getAttribute('viewBox');
    this.setUpTemplate();
  }

  ngAfterViewInit() {
    this.svgService.svg = this.customDesign;
    this.getScreenWidth();
  }

  setUpTemplate() {
    this.settings$
      .pipe(
        delay(0),
        take(1),
        switchMap((settings: CustomProductSetting[]) => {
          settings.forEach(setting => this.svgService.hideOptional(setting));
          settings.forEach(setting => this.svgService.setDefault(setting));
          return this.muay_thai$;
        }),
        switchMap((settings: CustomProductSetting[]) => {
          settings.forEach(setting => this.svgService.hideOptional(setting));
          return this.store.pipe(select(fromCustomiser.getDesign));
        }),
        untilComponentDestroyed(this)
      )
      .subscribe((design: CustomDesign) => {
        if (design) {
          this.design = design;
        }

        this.svgService.template = this.el;
        if (!this.templateLoaded) {
          this.setColours(design);
          this.loading.hide();
        }
        this.templateLoaded = true;
      });
  }

  setColours(design: CustomDesign) {
    if (design.panels) {
      design.panels.forEach(panel => {
        this.svgService.addColor(
          panel.material,
          panel.panel,
          true,
          panel.product_setting
            ? panel.product_setting.area_size.optional
            : false
        );
      });
    }
    if (design.names) {
      design.names.forEach(name => {
        this.svgService.addNameFillColour(name);
        if (name.outline) {
          this.svgService.addNameOutlineColour(name);
        }
      });
    }
    if (design.muay_thai) {
      this.svgService.addColor(
        design.muay_thai.fill,
        'MuayThaiFill',
        true,
        true
      );
      this.svgService.addColor(
        design.muay_thai.outline,
        'MuayThaiOutline',
        true,
        true
      );
    }
  }

  scaleObject(data: MatSliderChange) {
    const currentObject = this.designService.selectedObject.object;
    const diffX =
      currentObject.position.width * currentObject.position.scale -
      currentObject.position.width * data.value;
    const diffY =
      currentObject.position.height * currentObject.position.scale -
      currentObject.position.height * data.value;
    currentObject.position.x = currentObject.position.x + diffX / 2;
    currentObject.position.y = currentObject.position.y + diffY / 2;
    currentObject.position.scale = data.value;
    this.designService.updateObject(
      currentObject,
      this.designService.selectedObject.type
    );
  }

  rotateObject(data: MatSliderChange) {
    this.designService.selectedObject.object.position.rotate = data.value;
    this.designService.updateObject(
      this.designService.selectedObject.object,
      this.designService.selectedObject.type
    );
  }

  get svgXml() {
    const basePath = this.location.path();
    const svg: SVGElement = this.customDesign.nativeElement;
    svg.setAttributeNS(
      'http://www.w3.org/2000/xmlns/',
      'xmlns',
      'http://www.w3.org/2000/svg'
    );
    svg.setAttributeNS(
      'http://www.w3.org/2000/xmlns/',
      'xmlns:xlink',
      'http://www.w3.org/1999/xlink'
    );
    let svgXml = new XMLSerializer().serializeToString(svg);
    svgXml = svgXml.replace(/NS\d+:href/gi, 'xlink:href');
    svgXml = svgXml.replace(new RegExp(basePath, 'g'), '');
    return svgXml;
  }

  saveToAccount() {
    this.designService.saveToAccount(true, {
      save_to_account: true,
      svg_data: this.svgXml
    });
  }

  addToCart(design: CustomDesign) {
    this.cart.addCartCustom({
      custom_design: design._id,
      custom_product: design.product,
      svg_data: this.svgXml
    });
  }

  updateCart(design: CustomDesign) {
    if (this.cart.hasValidToken) {
      this.cart.updateCart(this.designService.cartId, {
        custom_design: design._id,
        custom_product: design.product,
        svg_data: this.svgXml
      });
    } else {
      this.addToCart(design);
    }
  }

  updateOrderAdmin(design: CustomDesign) {
    this.cart.updateOrderAdmin(this.designService.orderItemId, {
      custom_design: this.design._id,
      custom_product: this.design.product,
      svg_data: this.svgXml
    });
  }
  zoomIn() {
    if (this.scale2 < 250) {
      this.scale2 += 1; // Increase scale
      this.activeZoom = this.scale2
      this.translateY += 5;
      this.translateX -= 0.2;
    }
  }

  zoomOut() {
    if (this.scale2 > 25) {
      this.scale2 -= 1;
      this.activeZoom = this.scale2
      this.translateY -= 5;
      this.translateX += 0.2;
    }
  }

  getScaleStyle() {
    return {
      transform: `scale(${this.activeZoom}%)`,
    };
  }
  getPopupTransformStyle(){
    return {
      transform: `scale(1)`,
    };
  }
  getTransformStyle() {
    if(this.translateY>0 && this.screenWidth >767) {
      return {
        transform: `translate(0px, ${this.translateY}px)`,
      };
    }
    
  }
  onScroll(event: WheelEvent): void {
    event.preventDefault(); // Prevent default scrolling behavior
    if (event.deltaY < 0) {
      // Zoom in
      this.zoomIn()
    } else {
      // Zoom out
      this.zoomOut()
    }
  }
   // Method to get the current screen width
   getScreenWidth(): void {
    this.screenWidth = window.innerWidth;
  }

  onTemplateControlsClick(event: MouseEvent | TouchEvent): void {
    //prevent propagation to parent element
    event.stopPropagation();
  }
  updateZoom(value){
    this.activeZoom = value;
    this.scale2 = value;
    if (value == 'fill') this.fillDesign()
      if (value == 'fit') this.fitDesign()
    this.translateY = 5 * (this.scale2 - 100)
    this.getScaleStyle();
  }
 
  fillDesign(){
    const parentdiv = document.getElementsByClassName("cs-customizerr")
    if(parentdiv){
      let parentWidth = parentdiv[0].clientWidth
      let parentHeight = parentdiv[0].clientHeight
      const childDiv = document.getElementById("template")
      if(childDiv){
        let childWidth = childDiv.clientWidth
        let childHeight = childDiv.clientHeight
        // const scaleFactor = Math.max(childWidth / parentWidth, childHeight / parentHeight);
        const scaleFactor = Math.max(parentWidth / childWidth, parentHeight / childHeight);
        const scaleValue =parseInt((100 * scaleFactor).toFixed(0))
        this.scale2 = scaleValue - 75
        if(this.screenWidth >767){
          this.scale2 = scaleValue - 10
        }
        if(this.screenWidth <450){
          this.scale2 = scaleValue - 200
        }
        this.activeZoom = this.scale2
      }
    }
  }
  fitDesign(){
    const parentdiv = document.getElementsByClassName("cs-customizerr")
    if(parentdiv){
      let parentWidth = parentdiv[0].clientWidth
      let parentHeight = parentdiv[0].clientHeight
      const childDiv = document.getElementById("template")
      if(childDiv){
        let childWidth = childDiv.clientWidth
        let childHeight = childDiv.clientHeight
        // const scaleFactor = Math.min(childWidth / parentWidth, childHeight / parentHeight);
        const scaleFactor = Math.min(parentWidth / childWidth, parentHeight / childHeight);
        const scaleValue =parseInt((100 * scaleFactor).toFixed(0))
        this.scale2 = scaleValue - 7
        if(this.screenWidth >767){
          this.scale2 = scaleValue - 2
        }
        this.activeZoom = this.scale2
      }
    }
  }
  ngOnDestroy() {}
}
