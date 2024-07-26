import { SeoService } from './../core/services/seo.service';
import { map,  tap } from 'rxjs/operators';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { Page } from '@global/models/page';
import { Observable } from 'rxjs';
// import VanillaTilt from 'vanilla-tilt';
import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,  ElementRef, AfterViewInit,Renderer2 ,
  ViewChild
} from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselComponent } from 'ngx-owl-carousel-o';
@Component({
  selector: 'bx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('owlElement',{static:false}) owlElement: CarouselComponent;
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  host=window.location.origin
  home$: Observable<Page>;
  slideIndex = 0;
  constructor(private api: ApiService, private seo: SeoService, private el: ElementRef,private renderer: Renderer2) {}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    items: 5,
    center: true,
    navSpeed: 700,
    autoplay: true,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>  ← </title><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg>', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title> → </title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      1200: {
        items:4
      }
    },
    nav: true
  }
  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    items: 5,
    center: true,
    navSpeed: 700,
    autoplay: true,
    // navText: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>  ← </title><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg>', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title> → </title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }
  slidesStore=[
    {id:"0",text:`Amazing communication, beautiful shorts,super fast shipping. If you need some custom shotrs these are the people to use. I’ll be back for more!`,name:"Daniel Brauch", location:"US"},
    {id:"1",text:`Great communication on the specifics of my order. And the design came out really good. Exactly how I wanted it.`,name:"Damien Gonsalez", location:"US"},
    {id:"2",text:`Everything about the service is amazing I was updated on everything via email with pictures asking is everything okay ect and was emailed with a final outcome amazing work from the team at boxxerworld.`,name:"Charlie French", location:"GB"},
    {id:"3",text:`I order all my gear from Boxxerworld for 3 years and their so quick and accurate. They keep in touch with you along the whole process. Very outstanding service and product`,name:"Shad Kennedy", location:"US"},
    {id:"4",text:`The shorts looked great on the website while creating them, but even better when they were created physically! I don’t think I’ll go anywhere else for custom boxing apparel. Excellent job!`,name:"Carpe Vitae", location:"US"},
    {id:"5",text:`Absolutely beautiful honestly, from service to production absolute 10/10 shorts look beautiful and cannot be any more impressed`,name:"Slxp", location:"GB"},
    {id:"6",text:`You guys are amazing you were in contact with me every step off the way and made sure everything was perfect. Thank you so much. And delivery time is sooner than expected`,name:"Paul Valdez", location:"US"},
  ]
  slidesArray: any=[];
  counter: number = 0;
  ngOnInit() {
    // this.home$ = this.api.get('page', 'home').pipe(
    //   untilComponentDestroyed(this),
    //   tap((resp: Page) => {
        // this.seo.setMetaAndLinks(resp.title, resp.seo);
    //   })
    // );
    this.getProduct()
  }


  visibleSlides = [];
  currentIndex = 0;
  slidesToShow = 3;

ngAfterViewInit(): void {
  const card = this.el.nativeElement.querySelector('#card');
  // Add custom hover effect
  let mouseHover = false;
  let mousePosition = { x: 0, y: 0 };
  let cardSize = { width: 0, height: 0 };
  const SCALE_X = 4;
  const SCALE_Y = 8;

  card.onblur = () => {
    mouseHover = false;
  };

  card.onfocus = () => {
    mouseHover = true;
  };

  card.onmousemove = (e: MouseEvent) => {
    if (!mouseHover) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mousePosition = { x, y };
    cardSize = {
      width: card.offsetWidth || 0,
      height: card.offsetHeight || 0,
    };
    card.style.transform = `perspective(1000px) rotateX(${
      (mousePosition.y / cardSize.height) * -(SCALE_Y * 2) + SCALE_Y
    }deg) rotateY(${
      (mousePosition.x / cardSize.width) * (SCALE_X * 2) - SCALE_X
    }deg) translateZ(10px)`;
  };

  card.onmouseout = () => {
    mouseHover = false;
    card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  };

  card.onmouseover = () => {
    mouseHover = true;
  };
  this.increaseCounter(233)
}
increaseCounter(targetValue: number) {
  const startValue = this.counter;
  const increment = 1; 
  let currentValue = startValue;

  const interval = setInterval(() => {
    currentValue += increment;
    if (currentValue >= targetValue) {
      currentValue = targetValue;
      clearInterval(interval);
    }
    this.counter = Math.floor(currentValue); // Update counter with the new value
    if(document.getElementById("counterReview")){
    document.getElementById("counterReview").innerHTML = this.counter.toString()}
  }, 10); // Update every 10 milliseconds
}
getProduct(){
  this.api
      .find('custom-product', {
        "$category": "custom-fightwear/shorts-trunks",
        "published": true,
        "$limit": 10,
        "$skip": 0,
        "$sort": {
            "sold_count": -1
        },
        "$select": [
            "category",
            "code",
            "title",
            "image",
            "price",
            "sale_amount",
            "sale_percent",
            "sale_start_date",
            "sale_end_date",
            "slug",
            "sold_count"
        ]
    }).subscribe((data)=>{
      if(data && data.data){
        this.slidesArray = data.data
      }
    })
}
toggleVideo(event: any) {
  this.simulateClick()
}
simulateClick() {
  if (this.videoplayer && this.videoplayer.nativeElement) {
    this.renderer.listen(this.videoplayer.nativeElement, 'click', () => {
      this.autoplayVideo();
    });
    this.videoplayer.nativeElement.click();
  }
}

autoplayVideo() {
  if (this.videoplayer && this.videoplayer.nativeElement) {
    this.videoplayer.nativeElement.muted = true; // Mute the video for autoplay
    this.videoplayer.nativeElement.play().catch(error => {
      console.error('Error trying to autoplay video:', error);
    });
  }
}
next() {
  this.owlElement.next(); // The number here represents the speed in milliseconds
}

prev() {
  this.owlElement.prev();
}
  ngOnDestroy() {}
}
