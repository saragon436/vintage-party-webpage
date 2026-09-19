import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/scroll-reveal.directive';

interface Testimonial {
  quote: string;
  initials: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './testimonios.component.html',
  styleUrl: './testimonios.component.css'
})
export class TestimoniosComponent {
  testimonials: Testimonial[] = [
    {
      quote: 'Trabajamos con Vintage Party en más de 15 bodas este año. Siempre entregan a tiempo y el mobiliario llega impecable — ya es nuestro proveedor de cabecera.',
      initials: 'MC',
      name: 'Mariana Castro',
      role: 'Catering Dulce Ocasión'
    },
    {
      quote: 'Necesitábamos armar una activación de marca en dos días y el catálogo de cilindros y paneles nos resolvió todo. Coordinación rápida por WhatsApp.',
      initials: 'JR',
      name: 'Jorge Ramírez',
      role: 'Eventos Corporativos Alto Perú'
    },
    {
      quote: 'La sala lounge y la decoración vintage hicieron que los XV años de mi hija quedaran espectaculares. Superó lo que imaginábamos.',
      initials: 'LT',
      name: 'Lucía Torres',
      role: 'Cliente particular — XV años'
    }
  ];
}
