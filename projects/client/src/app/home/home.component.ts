import { SeoService } from './../core/services/seo.service';
import { tap } from 'rxjs/operators';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { Page } from '@global/models/page';
import { Observable } from 'rxjs';
import VanillaTilt from 'vanilla-tilt';
import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,  ElementRef, AfterViewInit
} from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'bx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  home$: Observable<Page>;
  slideIndex = 0;
  constructor(private api: ApiService, private seo: SeoService, private el: ElementRef) {}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    items: 5,
    center: true,
    navSpeed: 700,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>  ← </title><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg>', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title> → </title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 5
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
  slidesStore=[
    {id:0,text:`orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,`},
    {id:1,text:`orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,`},
    {id:2,text:`orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,`},
    {id:3,text:`orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,`},
    {id:4,text:`orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,`},
    {id:5,text:`orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,`},
    {id:6,text:`orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,`},
  ]
  ngOnInit() {
    this.home$ = this.api.get('page', 'home').pipe(
      untilComponentDestroyed(this),
      tap((resp: Page) => {
        this.seo.setMetaAndLinks(resp.title, resp.seo);
      })
    );
  }

 slides = document.querySelector('.slides');
 totalSlides = document.querySelectorAll('.slide').length;
 visibleSlides = 3; // Number of slides visible at once

 showSlides() {
    if (this.slideIndex >= this.totalSlides / this.visibleSlides) {
      this.slideIndex = 0;
    } else if (this.slideIndex < 0) {
      this.slideIndex = Math.ceil(this.totalSlides / this.visibleSlides) - 1;
    }
    console.log(this.slideIndex)
    // this.slides.style.transform = `translateX(${-this.slideIndex * 100 /this.visibleSlides}%)`;
}

 moveSlides(n) {
  console.log(n)
    this.slideIndex += n;
    this.showSlides();
} 


// Optional: Auto-slide every 3 seconds
// setInterval(() => {
//     slideIndex++;
// }, 3000);

//   videoOptions(key) {
//     return {
//       // tslint:disable-next-line:max-line-length
//       mp4: `https://boxxer-images.ams3.cdn.digitaloceanspaces.com/${key}.mp4`,
//     };
//   }
ngAfterViewInit(): void {
  const card = this.el.nativeElement.querySelector('#card');

  // Initialize VanillaTilt
  VanillaTilt.init(card, {
    max: 25,
    speed: 400,
    glare: true,
    'max-glare': 0.5
  });

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
}

  ngOnDestroy() {}
}
