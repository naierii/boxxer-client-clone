import { debounce } from 'lodash';
import { GALLERY_IMAGE } from './../image-gallery.conf';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  Renderer2,
  SimpleChanges,
  OnChanges,
  HostBinding,
  HostListener,
  Input,
  ChangeDetectorRef
} from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';

// key codes to react
const KEY_CODES = {
  37: 'LEFT',
  39: 'RIGHT',
  27: 'ESC'
};

export const slideOutLeft = [
  style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
  style({ transform: 'translate3d(-100%, 0, 0)', opacity: 0, offset: 1 })
];

export const slideOutRight = [
  style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
  style({ transform: 'translate3d(100%, 0, 0)', opacity: 0, offset: 1 })
];

@Component({
  selector: 'bx-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
  animations: [
    trigger('swipeAnimation', [
      transition('* => left', animate(300, keyframes(slideOutLeft))),
      transition('* => right', animate(300, keyframes(slideOutRight)))
    ])
  ]
})
export class ImageGalleryComponent implements OnInit, OnChanges {
  animationState: string;
  // gallery opened memory
  @HostBinding('class.active')
  opened = false;

  @Input()
  images: GALLERY_IMAGE[] = [];

  @Input()
  showProduct = true;

  // event emmiters
  @Output()
  imageOpen = new EventEmitter();
  @Output()
  imageClose = new EventEmitter();
  @Output()
  imageDelete = new EventEmitter();
  @Output()
  imageChange = new EventEmitter();
  @Output()
  imageClicked = new EventEmitter();

  // loading animation memory
  loading = false;
  // current active image index
  activeImageIndex: number = null;

  // debounced prev
  private debouncedPrev = debounce(() => this.prev(), 100, {
    leading: true,
    trailing: false
  });

  // debounced next
  private debouncedNext = debounce(() => this.next(), 100, {
    leading: true,
    trailing: false
  });

  // active image
  get activeImage(): GALLERY_IMAGE {
    return this.images[this.activeImageIndex];
  }

  // if gallery is on : first image
  get onFirstImage(): boolean {
    return this.activeImageIndex === 0;
  }

  // if gallery is on : last image
  get onLastImage(): boolean {
    return this.activeImageIndex === this.images.length - 1;
  }

  // load image and return promise
  private loadImage(index: number): Promise<any> {
    const galleryImage: GALLERY_IMAGE = this.images[index];

    // check if image is cached
    if (galleryImage && galleryImage._cached) {
      return Promise.resolve(index);
    } else if (galleryImage) {
      return new Promise((resolve, reject) => {
        this.loading = true;
        const image = new Image();
        image.src = galleryImage.url;
        image.onload = () => {
          this.loading = false;
          galleryImage._cached = true;
          resolve(index);
        };

        image.onerror = error => {
          this.loading = false;
          reject(error);
        };
      });
    } else {
      return Promise.resolve(0);
    }
  }

  // activate image (set active image)
  private activateImage(imageIndex: number) {
    // prevent loading if already loading
    if (this.loading) {
      return false;
    }
    // emit event
    this.imageChange.emit(imageIndex);

    this.loadImage(imageIndex)
      .then(_imageIndex => {
        this.activeImageIndex = _imageIndex;
        this.cdr.detectChanges();
      })
      .catch(error => console.warn(error));
  }

  // keyboard event
  @HostListener('window:keydown', ['$event'])
  onKeyboardInput(event: any) {
    if (event.defaultPrevented) {
      return; // Should do nothing if the default action has been cancelled
    }
    let handled = false;
    let code;
    if (event.key !== undefined) {
      // Handle the event with KeyboardEvent.key and set handled true.
      code = event.key;
      handled = true;
    } else if (event.keyIdentifier !== undefined) {
      // Handle the event with KeyboardEvent.keyIdentifier and set handled true.
      code = event.keyIdentifier;
      handled = true;
    } else if (event.keyCode !== undefined) {
      // Handle the event with KeyboardEvent.keyCode and set handled true.
      code = event.keyCode;
      handled = true;
    }

    if (this.opened && !this.loading && code) {
      if (KEY_CODES[code] === 'RIGHT') {
        this.next();
      } else if (KEY_CODES[code] === 'LEFT') {
        this.prev();
      } else if (KEY_CODES[code] === 'ESC') {
        this.close();
      }
    }

    if (handled) {
      // Suppress "double action" if event handled
      event.preventDefault();
    }
  }

  constructor(
    private galleryElem: ElementRef,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    // when gallery images changes
    if (changes.images && changes.images.firstChange === false) {
      this.images = changes.images.currentValue;
      if (this.images.length) {
        this.activateImage(0);
      }
    }
  }

  // open gallery
  open(index: number = 0) {
    if (this.images.length) {
      this.opened = true;
      // emit event
      this.imageOpen.emit(index);
      // activate image at given index
      this.activateImage(index);
    } else {
      console.warn('No images provided to ngx-image-gallery!');
    }
  }

  // close gallery
  close() {
    this.opened = false;
    this.activeImageIndex = 0;

    // emit event
    this.imageClose.emit();
  }

  // change prev image
  prev() {
    if (this.onFirstImage === false) {
      this.activateImage(this.activeImageIndex - 1);
      this.animationState = 'right';
    }
  }

  // change next image
  next() {
    if (this.onLastImage === false) {
      this.activateImage(this.activeImageIndex + 1);
      this.animationState = 'left';
    }
  }

  // set image (activate)
  setActiveImage(index: number) {
    this.activateImage(index);
  }

  // delete image
  deleteImage(index: number) {
    this.imageDelete.emit(index);
  }

  // mouse wheel up (prev image)
  mouseWheelUp() {
    this.debouncedNext();
  }

  // mouse wheel down (next image)
  mouseWheelDown() {
    this.debouncedPrev();
  }

  // click on image
  clickOnImage(index: number) {
    this.imageClicked.emit(index);
  }
}
