import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

/**
 * Agrega la clase `is-visible` al elemento host cuando entra en el viewport,
 * usando IntersectionObserver. Se combina con las clases CSS `.reveal`,
 * `.reveal-title` o `.reveal-pop` definidas en styles.css.
 *
 * Uso:
 *   <h2 class="reveal-title" appScrollReveal>Titulo</h2>
 *   <div class="reveal" [appScrollReveal]="i" *ngFor="let x of items; let i = index">...</div>
 *
 * El valor pasado (indice de tarjeta) se usa para escalonar la animacion via
 * la variable CSS --reveal-delay (~0.12s por elemento).
 *
 * Si el host tiene [countTarget], el texto se anima desde 0 hasta ese numero
 * (con sufijo "+") en cuanto se revela - usado en las estadisticas del hero.
 */
@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  @Input('appScrollReveal') delayIndex: number | string = 0;
  @Input() countTarget?: number;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const element = this.el.nativeElement;
    const index = Number(this.delayIndex) || 0;
    element.style.setProperty('--reveal-delay', `${index * 0.12}s`);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      element.classList.add('is-visible');
      if (this.countTarget) {
        element.textContent = `${this.countTarget}+`;
      }
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            element.classList.add('is-visible');
            if (this.countTarget) {
              this.animateCount(element, this.countTarget);
            }
            this.observer?.unobserve(element);
          }
        }
      },
      { threshold: 0.15 }
    );
    this.observer.observe(element);
  }

  private animateCount(element: HTMLElement, target: number): void {
    const duration = 1200;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (start === null) {
        start = timestamp;
      }
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = `${Math.floor(eased * target)}+`;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.textContent = `${target}+`;
      }
    };
    requestAnimationFrame(step);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
