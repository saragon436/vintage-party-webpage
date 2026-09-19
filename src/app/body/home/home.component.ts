import { Component } from '@angular/core';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [QuienesSomosComponent, GaleriaComponent, ContactoComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  carouselImages: string[] = [
    'images/portada/banner_1.jpg',
    'images/portada/banner_2.jpeg',
    'images/portada/banner_3.jpeg',
    'images/portada/banner_4.jpeg',
    'images/portada/banner_5.jpeg',
    'images/portada/banner_6.jpeg',
    'images/portada/banner_7.jpeg'
  ];
}
