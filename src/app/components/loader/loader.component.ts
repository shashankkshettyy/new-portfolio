import {
  Component,
  AfterViewInit,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-loader',
  standalone: true,
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements AfterViewInit {
  @Output() loadingComplete = new EventEmitter<void>();

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const wlcmText = this.el.nativeElement.querySelector('#wlcm-text');
    const toText = this.el.nativeElement.querySelector('#to-text');
    const fullLogo = this.el.nativeElement.querySelector('#full-logo');
    const portfolio = this.el.nativeElement.querySelector('#portfolio');

    const s1StartX = 300;
    const s2StartX = 320;
    const centerX = (s1StartX + s2StartX) / 2;
    const gapFromLetters = 18.9;
    const totalLineHalfLength = 200;
    const adjustedY = 48;

    // Cache width (avoid forced layout later)
    const screenWidth = window.innerWidth;

    const tl = gsap.timeline({
      onComplete: () => this.loadingComplete.emit(),
    });

    tl.to(wlcmText, { opacity: 1, duration: 0.2, ease: 'power2.out' })
      .to(wlcmText, { opacity: 0, duration: 0.15 })
      .to(toText, { opacity: 1, duration: 0.2, ease: 'power2.out' })
      .to(toText, { opacity: 0, duration: 0.15 })
      .to(fullLogo, { opacity: 1, duration: 0.3, ease: 'power2.out' })
      .to(fullLogo, { opacity: 0, duration: 0.2 })
      .to(portfolio, { y: 0, opacity: 1, duration: 0.3, ease: 'power4.out' });
  }
}
