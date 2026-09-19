import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { NuevoCatalogoComponent } from './nuevo-catalogo/nuevo-catalogo.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { FaqComponent } from './faq/faq.component';
import { ContactoComponent } from './contacto/contacto.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    QuienesSomosComponent,
    NuevoCatalogoComponent,
    CategoriasComponent,
    CatalogoComponent,
    ComoFuncionaComponent,
    EmpresasComponent,
    TestimoniosComponent,
    GaleriaComponent,
    FaqComponent,
    ContactoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
