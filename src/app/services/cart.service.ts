import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  img: string;
  categoryLabel: string;
  /**
   * Precio referencial de EJEMPLO (placeholder) por día de alquiler.
   * No todos los productos lo tienen (los que se "cotizan a medida" no).
   */
  price?: number;
  quantity: number;
}

const STORAGE_KEY = 'vp_cart_items';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>(this.loadFromStorage());
  private isOpenSubject = new BehaviorSubject<boolean>(false);

  items$ = this.itemsSubject.asObservable();
  isOpen$ = this.isOpenSubject.asObservable();

  count$ = this.items$.pipe(map(items => items.reduce((total, item) => total + item.quantity, 0)));
  pricedItems$ = this.items$.pipe(map(items => items.filter(item => typeof item.price === 'number')));
  total$ = this.pricedItems$.pipe(map(items => items.reduce((total, item) => total + (item.price ?? 0) * item.quantity, 0)));
  hasPricedItems$ = this.pricedItems$.pipe(map(items => items.length > 0));

  private loadFromStorage(): CartItem[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  private persist(items: CartItem[]): void {
    this.itemsSubject.next(items);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // localStorage no disponible (modo privado, etc.) - el carrito sigue en memoria
    }
  }

  get value(): CartItem[] {
    return this.itemsSubject.value;
  }

  quantityOf(id: number): number {
    return this.itemsSubject.value.find(item => item.id === id)?.quantity ?? 0;
  }

  add(product: Omit<CartItem, 'quantity'>): void {
    const items = [...this.itemsSubject.value];
    const existing = items.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      items.push({ ...product, quantity: 1 });
    }
    this.persist(items);
  }

  updateQuantity(id: number, quantity: number): void {
    let items = [...this.itemsSubject.value];
    if (quantity <= 0) {
      items = items.filter(item => item.id !== id);
    } else {
      const item = items.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    }
    this.persist(items);
  }

  remove(id: number): void {
    this.persist(this.itemsSubject.value.filter(item => item.id !== id));
  }

  clear(): void {
    this.persist([]);
  }

  open(): void {
    this.isOpenSubject.next(true);
  }

  close(): void {
    this.isOpenSubject.next(false);
  }

  toggle(): void {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }
}
