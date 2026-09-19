import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ClaimsService } from '../services/claims.service';
import { ToastService } from '../services/toast.service';

interface ClaimForm {
  nombre: string;
  tipoDoc: string;
  numDoc: string;
  telefono: string;
  email: string;
  domicilio: string;
  monto: string;
  producto: string;
  detalle: string;
  pedido: string;
  acepta: boolean;
}

/**
 * Libro de Reclamaciones Virtual, conforme al Codigo de Proteccion y Defensa
 * del Consumidor (Ley N° 29571). Los datos del proveedor (razon social, RUC,
 * direccion) son de EJEMPLO: deben confirmarse con los datos reales de la
 * empresa antes de publicar.
 */
@Component({
  selector: 'app-claims',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './claims.component.html',
  styleUrl: './claims.component.css'
})
export class ClaimsComponent implements OnInit, OnDestroy {
  isOpen = false;
  submitted = false;
  claimNumber = '';
  claimType: 'reclamo' | 'queja' = 'reclamo';

  form: ClaimForm = {
    nombre: '', tipoDoc: 'DNI', numDoc: '', telefono: '', email: '', domicilio: '',
    monto: '', producto: '', detalle: '', pedido: '', acepta: false
  };

  private subscription = new Subscription();

  constructor(private claims: ClaimsService, private toast: ToastService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.claims.isOpen$.subscribe(isOpen => {
        this.isOpen = isOpen;
        if (isOpen) {
          this.submitted = false;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  close(): void {
    this.claims.close();
  }

  selectReclamo(): void {
    this.claimType = 'reclamo';
  }

  selectQueja(): void {
    this.claimType = 'queja';
  }

  submit(): void {
    const f = this.form;
    if (!f.nombre || !f.numDoc || !f.email || !f.detalle || !f.pedido || !f.acepta) {
      this.toast.show('Completa los campos obligatorios (*) y acepta la declaración.');
      return;
    }
    this.claimNumber = `VP-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    this.submitted = true;
  }

  print(): void {
    window.print();
  }
}
