import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CatalogFilterService } from '../services/catalog-filter.service';
import { ClaimsService } from '../services/claims.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  year = new Date().getFullYear();

  constructor(private catalogFilter: CatalogFilterService, private claims: ClaimsService) {}

  selectCategory(key: string): void {
    this.catalogFilter.setCategory(key);
  }

  openClaims(event: Event): void {
    event.preventDefault();
    this.claims.open();
  }
}
