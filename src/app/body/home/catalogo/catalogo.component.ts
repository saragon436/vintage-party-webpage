import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CATEGORIES, CatalogProduct, PRODUCTS } from '../../../data/catalog-data';
import { CartService } from '../../../services/cart.service';
import { CatalogFilterService } from '../../../services/catalog-filter.service';
import { LightboxService } from '../../../services/lightbox.service';
import { ScrollRevealDirective } from '../../../shared/scroll-reveal.directive';

interface ProductView extends CatalogProduct {
  qty: number;
  priceLabel: string;
}

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollRevealDirective],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit, OnDestroy {
  searchQuery = '';
  activeCategory = 'todos';
  visibleCount = 8;

  private cartQuantities: Record<number, number> = {};
  private subscriptions = new Subscription();

  categoryChips = [{ key: 'todos', label: 'Todos' }, ...CATEGORIES.map(c => ({ key: c.key, label: c.label }))];

  constructor(
    private cart: CartService,
    public catalogFilter: CatalogFilterService,
    private lightbox: LightboxService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.cart.items$.subscribe(items => {
        this.cartQuantities = {};
        items.forEach(item => (this.cartQuantities[item.id] = item.quantity));
      })
    );
    this.subscriptions.add(
      this.catalogFilter.activeCategory$.subscribe(category => {
        this.activeCategory = category;
        this.visibleCount = 8;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
      this.loadMore();
    }
  }

  onSearchChange(): void {
    this.visibleCount = 8;
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.visibleCount = 8;
  }

  setCategory(key: string): void {
    this.catalogFilter.setCategory(key);
  }

  private priceLabel(product: CatalogProduct): string {
    return typeof product.price === 'number' ? `S/ ${product.price.toFixed(2)} / día` : 'Precio a cotizar';
  }

  get filtered(): ProductView[] {
    const query = this.searchQuery.trim().toLowerCase();
    return PRODUCTS.filter(p => {
      const matchesCategory = this.activeCategory === 'todos' || p.categoryKey === this.activeCategory;
      const matchesQuery = !query || p.name.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    }).map(p => ({ ...p, qty: this.cartQuantities[p.id] || 0, priceLabel: this.priceLabel(p) }));
  }

  get visibleProducts(): ProductView[] {
    return this.filtered.slice(0, this.visibleCount);
  }

  get hasMore(): boolean {
    return this.visibleCount < this.filtered.length;
  }

  get noResults(): boolean {
    return this.filtered.length === 0;
  }

  get noMoreWithResults(): boolean {
    return !this.hasMore && !this.noResults;
  }

  loadMore(): void {
    this.visibleCount += 8;
  }

  addToCart(product: ProductView): void {
    this.cart.add({ id: product.id, name: product.name, img: product.img, categoryLabel: product.categoryLabel, price: product.price });
  }

  increase(product: ProductView): void {
    this.cart.updateQuantity(product.id, product.qty + 1);
  }

  decrease(product: ProductView): void {
    this.cart.updateQuantity(product.id, product.qty - 1);
  }

  zoom(product: ProductView): void {
    this.lightbox.open(product.img, product.name);
  }

  trackByProductId(_index: number, product: ProductView): number {
    return product.id;
  }
}
