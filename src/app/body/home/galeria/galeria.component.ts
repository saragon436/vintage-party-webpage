import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GALLERY } from '../../../data/catalog-data';
import { LightboxService } from '../../../services/lightbox.service';
import { ScrollRevealDirective } from '../../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  images = GALLERY;

  constructor(private lightbox: LightboxService) {}

  open(img: string, alt: string): void {
    this.lightbox.open(img, alt);
  }
}
