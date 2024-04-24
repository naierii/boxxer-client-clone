import {
  Component,
  Input,
  ViewChild,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'bx-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoComponent implements OnChanges {
  @Input()
  options: any;
  @Input()
  play: boolean;
  @ViewChild('videoPlayer', { static: true })
  videoplayer: any;
  @Input()
  showControls = false;
  @Input()
  loop = false;
  @Input()
  name: string;
  get video() {
    return this.videoplayer.nativeElement;
  }
  get isPlaying() {
    return (
      this.video.currentTime > 0 &&
      !this.video.paused &&
      !this.video.ended &&
      this.video.readyState > 2
    );
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.play && changes.play.currentValue) {
      this.playVideo();
    }
  }
  playVideo() {
    if (!this.isPlaying && !this.play) {
      this.play = true;
      this.video.play(0);
      this.showControls = true;
    }
  }

  pauseVideo() {
    this.video.pause();
    this.showControls = false;
  }
}
