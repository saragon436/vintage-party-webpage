import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CatalogProduct, NEW_ARRIVAL_IDS, PRODUCTS } from '../../../data/catalog-data';
import { ScrollRevealDirective } from '../../../shared/scroll-reveal.directive';

interface NewArrivalView extends CatalogProduct {
  slideClass: string;
}

@Component({
  selector: 'app-nuevo-catalogo',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './nuevo-catalogo.component.html',
  styleUrl: './nuevo-catalogo.component.css'
})
export class NuevoCatalogoComponent implements OnInit, OnDestroy {
  index = 0;
  paused = false;

  private items = NEW_ARRIVAL_IDS.map(id => PRODUCTS.find(p => p.id === id)).filter(
    (p): p is CatalogProduct => !!p
  );
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      if (!this.paused) {
        this.next();
      }
    }, 3500);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  get arrivals(): NewArrivalView[] {
    const total = this.items.length;
    return this.items.map((item, i) => {
      const diff = ((i - this.index) + total) % total;
      let slideClass = 'new-slide';
      if (diff === 0) {
        slideClass += ' active';
      } else if (diff === 1) {
        slideClass += ' next-slide';
      } else if (diff === total - 1) {
        slideClass += ' prev-slide';
      }
      return { ...item, slideClass };
    });
  }

  get dots(): number[] {
    return this.items.map((_, i) => i);
  }

  next(): void {
    this.index = (this.index + 1) % this.items.length;
  }

  prev(): void {
    this.index = (this.index - 1 + this.items.length) % this.items.length;
  }

  goTo(i: number): void {
    this.index = i;
  }

  pause(): void {
    this.paused = true;
  }

  resume(): void {
    this.paused = false;
  }

  trackByProductId(_index: number, item: NewArrivalView): number {
    return item.id;
  }
}
