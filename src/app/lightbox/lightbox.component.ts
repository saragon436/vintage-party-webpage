import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LightboxService } from '../services/lightbox.service';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.css'
})
export class LightboxComponent {
  constructor(public lightbox: LightboxService) {}

  close(): void {
    this.lightbox.close();
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}
