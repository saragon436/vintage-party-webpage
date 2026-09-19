import { Injectable } from '@angular/core';

export interface Category {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: Category[] = [
    { id: 1, name: 'ACESSÓRIO' },
    { id: 2, name: 'BANCO' },
    { id: 3, name: 'BANDEJA' },
    { id: 4, name: 'BANQUETA' },
    { id: 5, name: 'BOLO' },
    { id: 6, name: 'CADEIRA' },
    { id: 7, name: 'CAIXOTE' },
    { id: 8, name: 'CAPA' },
    { id: 9, name: 'CILINDRO' },
    { id: 10, name: 'DECORATIVO' },
    { id: 11, name: 'DIVERSOS' },
    { id: 12, name: 'LUMINOSO' },
    { id: 13, name: 'MALETA' },
    { id: 14, name: 'MESA' },
    { id: 15, name: 'MÓVEIS' },
    { id: 16, name: 'PAINEL' },
    { id: 17, name: 'PERSONALIZAÇÃO' },
    { id: 18, name: 'RÚSTICO' },
    { id: 19, name: 'SUPORTE' },
    { id: 20, name: 'VASO' },
    { id: 21, name: 'SUQUEIRA' }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getCategoryById(id: number): Category | undefined {
    return this.categories.find(category => category.id === id);
  }
}