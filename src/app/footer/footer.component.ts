import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService, Category, CategorySummary } from '../services/serviceCategory';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  fecha: string = new Date().getFullYear().toString();
  categories: Category[] = [];

  constructor(private categoryService: CategoryService, private router: Router) {
    this.categoryService.getFirstLevelCategoriesOrChildren().subscribe(
      (categories: CategorySummary) => {
        this.categories = categories.categories;
      }
    );
  }

  selectCategory(category: Category): void {
    this.router.navigate(['/store', category.id]);
  }
}
