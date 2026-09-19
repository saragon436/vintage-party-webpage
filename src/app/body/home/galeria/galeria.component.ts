import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  constructor(private router: Router) {}
  galleryItems: { title: string, image: string, id: number }[] = [
    { title: 'Carretas', image: 'images/gallery_vintage.jpeg', id: 1 },
    { title: 'Mobiliario Corporativo', image: 'images/gallery_corporativo.jpeg', id: 2 },
    { title: 'Mobiliario Infantiles', image: 'images/gallery_rustico.jpeg', id: 4 },
    { title: 'Sociales', image: 'images/gallery_lounge.jpeg', id: 20 },
  ];

  selectCategory(categoryId: number): void {
    this.router.navigate(['/store', categoryId]);
  }
}
