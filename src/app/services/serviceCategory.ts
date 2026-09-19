import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Category {
    type: 'category';
    name: string;
    id: number;
    product?: (Category | Product)[];
}

export interface Product {
    type: 'product';
    name: string;
    id: number;
    url: string;
}

export interface CategorySummary {
    id: number;
    name: string;
    categories: Category[];
}

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private categoriesUrl = 'categorias.json';
    constructor(private http: HttpClient) { }

    getFirstLevelCategoriesOrChildren(parentId?: number): Observable<CategorySummary> {
        return this.http.get<Category[]>(this.categoriesUrl).pipe(
            map((categories: Category[]) => {
                if (parentId == null) {
                    categories = categories.filter(cat => cat.type === 'category');
                    return {id: 0, name: 'Todas las categorias', categories};
                } else {
                    // Buscar el category por id en cualquier nivel
                    const findCategoryById = (cats: (Category | Product)[]): Category | undefined => {
                        for (const cat of cats) {
                            if (cat.type === 'category' && cat.id === parentId) return cat as Category;
                            if (cat.type === 'category' && cat.product && Array.isArray(cat.product)) {
                                const found = findCategoryById(cat.product);
                                if (found) return found;
                            }
                        }
                        return undefined;
                    };
                    const parent = findCategoryById(categories);
                    if (!parent) return {id: 0, name: 'Todas las categorias', categories: []};
                    const subcategories = (parent.product ?? [])
                        .filter((item): item is Category => item.type === 'category')
                    return {
                        id: parent.id,
                        name: parent.name,
                        categories: subcategories
                    };
                }
            })
        );
    }

    getProductsByCategoryId(categoryId: number): Observable<Product[]> {
    return this.http.get<Category[]>(this.categoriesUrl).pipe(
        map((categories: Category[]) => {
            // Buscar el category por id en cualquier nivel
            const findCategoryById = (cats: (Category | Product)[]): Category | undefined => {
                for (const cat of cats) {
                    if (cat.type === 'category' && cat.id === categoryId) return cat as Category;
                    if (cat.type === 'category' && cat.product && Array.isArray(cat.product)) {
                        const found = findCategoryById(cat.product);
                        if (found) return found;
                    }
                }
                return undefined;
            };

            // Recolectar todos los productos de un category y sus subcategorías
            const collectProducts = (cat: Category): Product[] => {
                let products: Product[] = [];
                if (cat.product && Array.isArray(cat.product)) {
                    for (const item of cat.product) {
                        if (item.type === 'product') {
                            products.push(item as Product);
                        } else if (item.type === 'category') {
                            products = products.concat(collectProducts(item as Category));
                        }
                    }
                }
                return products;
            };

            const category = findCategoryById(categories);
            if (!category) return [];
            return collectProducts(category);
        })
    );
}
}