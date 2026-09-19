import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-promo-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promo-banner.component.html',
  styleUrl: './promo-banner.component.css'
})
export class PromoBannerComponent {
  visible = true;

  close(): void {
    this.visible = false;
  }
}
