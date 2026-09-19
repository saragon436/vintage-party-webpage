import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { CommonModule } from '@angular/common';
import { SitemapComponent } from '../../sitemap/sitemap.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Category, CategoryService, CategorySummary } from '../../services/serviceCategory';

interface Product {
  name: string;
  image: string;
}

@Component({
  selector: 'app-store',
  imports: [SearchComponent, SitemapComponent, CommonModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {
  categories: Category[] = [];
  products: Product[] = [];
  selectedCategory: string = 'MALETA';

  constructor(private categoryService: CategoryService, private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      let routeId = params.get('id') || '4';
      let intId = parseInt(routeId, 10);
      this.categoryService.getFirstLevelCategoriesOrChildren(intId).subscribe(
        (categories: CategorySummary) => {          
          this.categories = categories.categories;
          this.selectedCategory = categories.name;
          if (this.categories.length === 0) {
            this.categories = [{ id: categories.id, name: categories.name, type: 'category' }];
          }
        }
      );

      this.getProductsByCategory(intId);
      window.scrollTo(0, 0);     
    });

  }

  getProductsByCategory(categoryId: number): void {
    this.categoryService.getProductsByCategoryId(categoryId).subscribe(products => {
        this.products = products.map(product => ({
          name: product.name,
          image: product.url
        }));
      });
  }

  selectCategory(category: Category): void {
    this.selectedCategory = category.name;
    this.getProductsByCategory(category.id);
  }

  
  selectedProductIndex: number = 0;
  showModal: boolean = false;
  openModal(index: number): void {
    this.selectedProductIndex = index;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  prevImage(): void {
    if (this.selectedProductIndex > 0) {
      this.selectedProductIndex--;
    }
  }

  nextImage(): void {
    if (this.selectedProductIndex < this.products.length - 1) {
      this.selectedProductIndex++;
    }
  }
}
