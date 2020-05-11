import { Component, OnInit } from '@angular/core';
//Servicio
import { ArticulosService } from '../../../services/articulos.service';
// Rutas
import { ActivatedRoute, Router } from '@angular/router';
// Libeeria de formularios
import { NgForm } from '@angular/forms';
// Ventana Modal
import swal from 'sweetalert';
// modelo
import { Articulo } from '../../../models/articulo';
// Operadores
import { Observable } from 'rxjs';
// Autentificacion Firebase
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  public title: string;
  public articulo:any;

  constructor(private _service: ArticulosService, private _route: ActivatedRoute, private _router: Router, private afAuth: AngularFireAuth) {
    this.title = 'Crear Articulo';
    this.articulo = new Articulo();
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){

    let peticion: Observable<any>;

    // Validacion
    if(form.invalid){
      console.log('Formulario no valido.')
      return;
    }
    // Realizamos la peticion
    peticion = this._service.crearArticulo(this.articulo);
    peticion.subscribe(response =>{
      if( response.titulo && response.contenido){
        this.articulo = response.articulo;

        // Mensaje de Alerta//Aviso
        swal(
          'Articulo Creado',
          'El articulo se ha creado correctamente.',
          'success'
        );

        this._router.navigate(['/blog']);
      }else{
        // Mensaje de Alerta//Aviso
        swal(
          'Articulo no Creado',
          'El articulo no se ha creado.',
          'error'
        );
      }
    },
    error => {
      console.log(error);
    });
  }

  salir(){
    this.afAuth.signOut();
    this._router.navigateByUrl('/inicio');
  }

}
