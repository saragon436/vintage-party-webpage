import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {}
