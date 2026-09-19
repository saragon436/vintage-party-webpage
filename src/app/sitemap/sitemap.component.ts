import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

interface BreadcrumbItem {
  label: string;
  link?: string;
  isLast: boolean;
}

@Component({
  selector: 'app-sitemap',
  imports: [RouterLink, CommonModule],
  templateUrl: './sitemap.component.html',
  styleUrl: './sitemap.component.css'
})
export class SitemapComponent {
  @Input() selectedCategory: string = 'MALETA';

  get breadcrumbs(): BreadcrumbItem[] {
    return [
      { label: 'Categoria', link: '/store', isLast: false },
      { label: this.selectedCategory, isLast: true }
    ];
  }
}
