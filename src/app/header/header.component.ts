import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ClaimsService } from '../services/claims.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public cart: CartService, private claims: ClaimsService) {}

  toggleCart(): void {
    this.cart.toggle();
  }

  openClaims(event?: Event): void {
    event?.preventDefault();
    this.claims.open();
  }
}
