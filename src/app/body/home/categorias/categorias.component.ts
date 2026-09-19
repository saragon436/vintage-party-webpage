import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CATEGORIES } from '../../../data/catalog-data';
import { CatalogFilterService } from '../../../services/catalog-filter.service';
import { ScrollRevealDirective } from '../../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  categories = CATEGORIES;

  constructor(private catalogFilter: CatalogFilterService) {}

  selectCategory(key: string): void {
    this.catalogFilter.setCategory(key);
  }
}
