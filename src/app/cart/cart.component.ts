import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem, CartService } from '../services/cart.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit, OnDestroy {
  items: CartItem[] = [];
  isOpen = false;
  total = 0;
  hasPricedItems = false;
  totalCount = 0;
  totalBump = false;
  quoteDate = new Date().toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' });

  private subscriptions = new Subscription();
  private previousTotal = 0;

  constructor(public cart: CartService, private toast: ToastService) {}

  ngOnInit(): void {
    this.subscriptions.add(this.cart.items$.subscribe(items => (this.items = items)));
    this.subscriptions.add(this.cart.isOpen$.subscribe(isOpen => (this.isOpen = isOpen)));
    this.subscriptions.add(this.cart.count$.subscribe(count => (this.totalCount = count)));
    this.subscriptions.add(this.cart.hasPricedItems$.subscribe(has => (this.hasPricedItems = has)));
    this.subscriptions.add(
      this.cart.total$.subscribe(total => {
        this.total = total;
        if (total !== this.previousTotal) {
          this.previousTotal = total;
          this.totalBump = false;
          requestAnimationFrame(() => {
            this.totalBump = true;
            setTimeout(() => (this.totalBump = false), 450);
          });
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  toggle(): void {
    this.cart.toggle();
  }

  close(): void {
    this.cart.close();
  }

  increase(item: CartItem): void {
    this.cart.updateQuantity(item.id, item.quantity + 1);
  }

  decrease(item: CartItem): void {
    this.cart.updateQuantity(item.id, item.quantity - 1);
  }

  removeItem(item: CartItem): void {
    this.cart.remove(item.id);
  }

  priceLabel(item: CartItem): string {
    return typeof item.price === 'number' ? `S/ ${item.price.toFixed(2)} / día` : 'Precio a cotizar';
  }

  sendQuote(): void {
    this.toast.show('Conectado a tu API REST: POST /api/cotizaciones');
  }

  copyQuoteSummary(): void {
    if (this.items.length === 0) {
      this.toast.show('Tu cotización está vacía — agrega mobiliario primero.');
      return;
    }
    const lines = this.items.map(
      item => `- ${item.name} (${item.categoryLabel}) x${item.quantity} — ${
        typeof item.price === 'number' ? `S/ ${(item.price * item.quantity).toFixed(2)}` : 'a cotizar'
      }`
    );
    const textLines = ['Cotización Vintage Party', ...lines];
    if (this.total > 0) {
      textLines.push('', `Total referencial: S/ ${this.total.toFixed(2)}`);
    }
    const full = textLines.join('\n');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(full)
        .then(() => this.toast.show('Resumen copiado — pégalo donde quieras enviarlo'))
        .catch(() => this.toast.show('No se pudo copiar automáticamente; selecciona el texto manualmente.'));
    } else {
      this.toast.show('Tu navegador no permite copiar automáticamente.');
    }
  }

  printQuote(): void {
    if (this.items.length === 0) {
      this.toast.show('Tu cotización está vacía — agrega mobiliario primero.');
      return;
    }
    window.print();
  }
}
