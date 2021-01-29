import { Component, OnInit } from '@angular/core';
// Libreria de formularios
import { NgForm } from '@angular/forms';
// Rutas
import { ActivatedRoute, Router } from '@angular/router';
// Servicios
import { ArticulosService } from '../../../services/articulos.service';
// Modelo
import { Articulo } from '../../../models/articulo';
// Ventana Modal
import swal from 'sweetalert';
// Operadores
import { Observable } from 'rxjs';
// Autentificacion Firebase
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  public title: string;
  public articulo:any;

  constructor(private _service: ArticulosService, private _route: ActivatedRoute, private _router: Router, private afAuth: AngularFireAuth) {
    this.title = 'Editar Articulo';
    this.articulo = new Articulo();
  }

  ngOnInit(): void {
    // Obtenemos los datos del articulo
    this.obtenerArticulo();
  }

  onSubmit(form: NgForm){

    let peticion: Observable<any>;

    // Validacion
    if(form.invalid){
      console.log('Formulario no valido.')
      return;
    }

    // Realizamos la peticion
    peticion = this._service.editarArticulo(this.articulo);

    peticion.subscribe(response =>{
      if( response.titulo && response.contenido){
        this.articulo = response.articulo;
        // Mensaje de Alerta//Aviso
        swal(
          'Articulo Modificado',
          'El articulo se ha modificado correctamente.',
          'success'
        );
        this._router.navigate(['/blog/articulo', this.articulo.id]);
      }else{
        // Mensaje de Alerta//Aviso
        swal(
          'Articulo no Modificado',
          'El articulo no se ha modificado.',
          'error'
        );
      }
    },
    error => {
      console.log(error);
    });
  }

  // Obtener los datos del articulo
  obtenerArticulo(){
    // Obtenemos el ID de la url para luego llamar a nuestro servicio
    const id = this._route.snapshot.paramMap.get('id');

    this._service.getArticuloById(id)
    .subscribe((data: Articulo) => {
      this.articulo = data;
      this.articulo.id = id;
    });
  }

  // Desconectar
  salir(){
    this.afAuth.signOut();
    this._router.navigateByUrl('/inicio');
  }

}
