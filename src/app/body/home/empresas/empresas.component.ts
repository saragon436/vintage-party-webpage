import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './empresas.component.html',
  styleUrl: './empresas.component.css'
})
export class EmpresasComponent {}
