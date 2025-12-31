import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements AfterViewInit {

  @Input() beforeImage!: string;
  @Input() afterImage!: string;

  @ViewChild('slider', { static: false }) slider!: ElementRef;

  position = 50;
  dragging = false;

  ngAfterViewInit() {}

  startDrag() {
    this.dragging = true;
  }

  stopDrag() {
    this.dragging = false;
  }

  move(event: MouseEvent | TouchEvent) {
    if (!this.dragging) return;

    const sliderRect = this.slider.nativeElement.getBoundingClientRect();
    const clientX =
      event instanceof TouchEvent
        ? event.touches[0].clientX
        : event.clientX;

    let newPos =
      ((clientX - sliderRect.left) / sliderRect.width) * 100;

    this.position = Math.max(0, Math.min(100, newPos));
  }
}
