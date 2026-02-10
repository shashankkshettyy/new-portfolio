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
    const s1 = this.el.nativeElement.querySelector('#s1');
    const s2 = this.el.nativeElement.querySelector('#s2');
    const portfolio = this.el.nativeElement.querySelector('#portfolio');
    const line = this.el.nativeElement.querySelector('#stretch-line');

    const s1StartX = 300;
    const s2StartX = 320;
    const centerX = (s1StartX + s2StartX) / 2;
    const gapFromLetters = 18.9;
    const totalLineHalfLength = 200;
    const adjustedY = 48;

    // Cache width (avoid forced layout later)
    const screenWidth = window.innerWidth;

    // Setup initial SVG line position
    line.setAttribute('x1', centerX.toString());
    line.setAttribute('x2', centerX.toString());
    line.setAttribute('y1', adjustedY.toString());
    line.setAttribute('y2', adjustedY.toString());

    const tl = gsap.timeline({
      onComplete: () => this.loadingComplete.emit(),
    });

    // Initial state
    tl.set(portfolio, { y: 200, opacity: 0 });

    tl.to(wlcmText, { opacity: 1, duration: 0.4, ease: 'power2.out' })
      .to(wlcmText, { opacity: 0, duration: 0.3 })

      .to(toText, { opacity: 1, duration: 0.4, ease: 'power2.out' })
      .to(toText, { opacity: 0, duration: 0.3 })

      .to([s1, s2], { opacity: 1, duration: 0.25 })

      .to([s1, s2], {
        opacity: 0,
        duration: 0.02,
        repeat: 8,
        yoyo: true,
        ease: 'none',
      })

      .add('afterBlink')

      .to(line, { opacity: 1, duration: 0.001 }, 'afterBlink')

      .to(
        s1,
        {
          x: -(totalLineHalfLength + gapFromLetters),
          duration: 0.5,
          ease: 'power2.out',
        },
        '<',
      )
      .to(
        s2,
        {
          x: totalLineHalfLength + gapFromLetters,
          duration: 0.5,
          ease: 'power2.out',
        },
        '<',
      )
      .to(
        line,
        {
          attr: {
            x1: centerX - totalLineHalfLength,
            x2: centerX + totalLineHalfLength,
          },
          duration: 0.5,
          ease: 'power2.out',
        },
        '<',
      )

      .to(
        s1,
        {
          x: -screenWidth,
          duration: 0.5,
          ease: 'power2.in',
        },
        '+=0.1',
      )
      .to(
        s2,
        {
          x: screenWidth,
          duration: 0.5,
          ease: 'power2.in',
        },
        '<',
      )
      .to(line, { opacity: 0, duration: 0.25 })

      .to(fullLogo, { opacity: 1, duration: 0.6, ease: 'power2.out' })
      .to(fullLogo, { opacity: 0, duration: 0.4 })

      .to(portfolio, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power4.out',
      })

      .to(portfolio, { opacity: 0, duration: 0.4 })

      // Reset letters for exit
      .to(
        line,
        {
          attr: { x1: centerX, x2: centerX },
          duration: 0.4,
          ease: 'power2.inOut',
        },
        '+=0.2',
      )
      .to(
        [s1, s2],
        {
          x: 0,
          duration: 0.4,
          ease: 'power2.inOut',
        },
        '<',
      )
      .to(line, { opacity: 0, duration: 0.2 }, '<+0.2');
  }
}
