import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogFilterService {
  private activeCategorySubject = new BehaviorSubject<string>('todos');
  activeCategory$ = this.activeCategorySubject.asObservable();

  get activeCategory(): string {
    return this.activeCategorySubject.value;
  }

  setCategory(key: string): void {
    this.activeCategorySubject.next(key);
    const el = document.getElementById('catalogo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
