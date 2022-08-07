import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductosComponent } from './productos/productos.component';

const APP_ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'carrito', component: CarritoComponent},
    {path: 'productos', component: ProductosComponent},
    {path: '**',pathMatch:'full', redirectTo:'login'},
    
];
    
export const ROUTING = RouterModule.forRoot(APP_ROUTES);