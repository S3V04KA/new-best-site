import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  template: `
    <div class="w-full h-full relative overflow-hidden bg-[#1c1c1c]">
      @for (src of images; track src; let i = $index) {
        <img [src]="src" [alt]="'Slide ' + (i + 1)"
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          [style.opacity]="i === currentIndex ? 1 : 0" />
      }
      <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        @for (src of images; track src; let i = $index) {
          <button (click)="currentIndex = i"
            class="w-2.5 h-2.5 rounded-full border border-white transition-colors"
            [class.bg-white]="i === currentIndex"
            [class.bg-white/30]="i !== currentIndex">
          </button>
        }
      </div>
    </div>
  `
})
export class SlideshowComponent implements OnInit, OnDestroy {
  @Input() images: string[] = [];
  currentIndex = 0;
  private interval: any;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 4000);
  }

  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval);
  }
}
