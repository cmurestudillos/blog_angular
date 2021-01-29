import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Rutas
import { AppRoutingModule } from './app-routing.module';
// Servicio
import { ArticulosService } from './services/articulos.service';
// Importamos propiedades para manejo de formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Importar referencias y conexion con la BBDD
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
// Peticiones Http
import { HttpClientModule } from '@angular/common/http';
// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { SliderComponent } from './components/shared/slider/slider.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ErrorComponent } from './components/shared/error/error.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BlogComponent } from './components/blog/blog.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { CrearComponent } from './components/actions/crear/crear.component';
import { EditarComponent } from './components/actions/editar/editar.component';
import { LoginComponent } from './components/login/login.component';

// Libreria Moment.js
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SliderComponent,
    LoadingComponent,
    ErrorComponent,
    InicioComponent,
    BlogComponent,
    BuscarComponent,
    ArticuloComponent,
    ArticulosComponent,
    CrearComponent,
    EditarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [ArticulosService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
