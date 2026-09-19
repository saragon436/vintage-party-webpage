import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

type IntroPhase = 'enter' | 'pulse' | 'curtain';

/**
 * Pantalla de intro que se reproduce una sola vez al cargar la pagina:
 * dos cilindros y un panel se acomodan, luego una mesa se asienta al centro,
 * un camion cruza la escena (el montaje quedo listo) y la pantalla se
 * desliza hacia arriba revelando el sitio.
 *
 * Respeta prefers-reduced-motion: si esta activo, la intro ni se muestra.
 */
@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent implements OnInit, OnDestroy {
  visible = true;
  dotsHidden = false;
  phase: IntroPhase = 'enter';

  private timers: ReturnType<typeof setTimeout>[] = [];

  ngOnInit(): void {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      this.visible = false;
      return;
    }

    document.body.style.overflow = 'hidden';

    // Secuencia: cilindro izq. (0-.5s) -> panel (.5-1s) -> cilindro der. (1-1.5s) -> mesa (1.5-2s) -> camion (2-2.6s)
    this.timers.push(setTimeout(() => (this.dotsHidden = true), 2600));
    this.timers.push(setTimeout(() => (this.phase = 'pulse'), 2700));
    this.timers.push(setTimeout(() => {
      this.phase = 'curtain';
      document.body.style.overflow = '';
    }, 3250));
    this.timers.push(setTimeout(() => (this.visible = false), 3950));
  }

  ngOnDestroy(): void {
    this.timers.forEach(id => clearTimeout(id));
    document.body.style.overflow = '';
  }
}
