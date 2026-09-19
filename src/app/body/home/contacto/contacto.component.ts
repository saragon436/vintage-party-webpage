import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../../services/toast.service';
import { ScrollRevealDirective } from '../../../shared/scroll-reveal.directive';

interface ContactForm {
  nombre: string;
  telefono: string;
  email: string;
  tipoEvento: string;
  fecha: string;
  mensaje: string;
}

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollRevealDirective],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  submitted = false;
  form: ContactForm = { nombre: '', telefono: '', email: '', tipoEvento: 'Social', fecha: '', mensaje: '' };

  constructor(private toast: ToastService) {}

  get whatsappHref(): string {
    const message = `Hola Vintage Party, soy ${this.form.nombre || ''}. ${this.form.mensaje || ''}`;
    return `https://wa.me/51936942342?text=${encodeURIComponent(message)}`;
  }

  submit(): void {
    if (!this.form.nombre || !this.form.email || !this.form.mensaje) {
      this.toast.show('Completa nombre, correo y mensaje para enviar.');
      return;
    }
    this.submitted = true;
  }
}
