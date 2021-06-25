import { NgModule } from '@angular/core';
// Rutas
import { Routes, RouterModule } from '@angular/router';
// Componentes
import { InicioComponent } from './components/inicio/inicio.component';
import { BlogComponent } from './components/blog/blog.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { ErrorComponent } from './components/shared/error/error.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { CrearComponent } from './components/actions/crear/crear.component';
import { EditarComponent } from './components/actions/editar/editar.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'blog/articulo/:id', component: ArticuloComponent},
  { path: 'buscar/:search', component: BuscarComponent},
  { path: 'blog/crear', component: CrearComponent},
  { path: 'blog/editar/:id', component: EditarComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
