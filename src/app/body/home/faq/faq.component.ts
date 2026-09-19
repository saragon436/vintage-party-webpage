import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FAQS } from '../../../data/catalog-data';
import { ScrollRevealDirective } from '../../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs = FAQS;
  openIndex: number | null = null;

  toggle(i: number): void {
    this.openIndex = this.openIndex === i ? null : i;
  }
}
