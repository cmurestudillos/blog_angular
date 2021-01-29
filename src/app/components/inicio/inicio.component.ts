import { Component, OnInit } from '@angular/core';
// Modelo
import { Articulo } from '../../models/articulo';
// Servicio
import { ArticulosService } from '../../services/articulos.service';
// Url de la API
import { Global } from '../../api/global';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent implements OnInit {
  public titulo:string;
  public url:string;
  public articulos: Articulo[] = [];

  constructor(private _service: ArticulosService) {
    this.titulo = 'Ultimos artículos';
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._service.getLastArticulos().subscribe((response) => {
      if(response){
        this.articulos = response;
      }
    },
    error => {
      console.log(error);
    }
    );
  }
}
