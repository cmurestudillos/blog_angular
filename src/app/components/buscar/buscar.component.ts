import { Component, OnInit } from '@angular/core';
// Rutas
import { Router, ActivatedRoute} from "@angular/router";
//Servicio
import { ArticulosService } from '../../services/articulos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {
  public titulo:string;
  public articulos:any;
  public search: string;

  constructor(private _route: ActivatedRoute, private _router: Router, private _service: ArticulosService) {
    this.titulo = 'Resultados';
  }

  ngOnInit(): void {
     // Obtenemos el string a buscar de la url para luego llamar a nuestro servicio
     this._route.params.subscribe(params =>{
      var search = params['search'];
      this.search = search;
        this._service.buscarArticulo(search).subscribe(data => {
          if(data){
            this.articulos = data;
            this.search = search;
          }
        },
        error =>{
          console.log(error);
        });
     });
    }
}
