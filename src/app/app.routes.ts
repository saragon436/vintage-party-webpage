import { Routes } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { StoreComponent } from './body/store/store.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'quienes-somos', redirectTo: '/#quienes-somos' },
    { path: 'galeria', redirectTo: '/#galeria' },
    { path: 'contacto', redirectTo: '/#contacto' },
    { path: 'store', component: StoreComponent },
    { path: 'store/:id', component: StoreComponent },
    { path: '**', redirectTo: '' }
];
